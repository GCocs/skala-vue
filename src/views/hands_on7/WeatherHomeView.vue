<script setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createFallbackWeather, WEATHER_CITIES } from '@/data/weatherCities.js'
import {
  fetchCurrentWeather,
  getOpenWeatherErrorMessage,
  hasOpenWeatherApiKey,
} from '@/services/openWeatherApi.js'
import { useConfigStore } from '@/stores/configStore.js'
import { useFavoriteWeatherStore } from '@/stores/favoriteWeather.js'
import BaseDashboardCard from '../../components/practices/hands_on7/BaseDashboardCard.vue'
import SearchBar from '../../components/practices/hands_on7/SearchBar.vue'
import WeatherCard from '../../components/practices/hands_on7/WeatherCard.vue'
import WeatherDetailModal from '../../components/practices/hands_on7/WeatherDetailModal.vue'
import WeatherPageHeader from '../../components/practices/hands_on7/WeatherPageHeader.vue'

const router = useRouter()
const route = useRoute()
const configStore = useConfigStore()
const favoriteStore = useFavoriteWeatherStore()

const weatherList = ref(WEATHER_CITIES.map(createFallbackWeather))

const searchQuery = ref('')
const selectedCityInfo = ref('')
const showAverage = ref(false)
const showHotOnly = ref(false)
const showFavoritesOnly = ref(false)
const sortOrder = ref('default')
const selectedWeather = ref(null)
const isWeatherLoading = ref(false)
const isUsingLiveData = ref(false)
const lastUpdated = ref(null)
const weatherMessage = ref(
  hasOpenWeatherApiKey
    ? 'OpenWeather에서 최신 날씨를 가져올 수 있습니다.'
    : '.env.local에 OpenWeather API 키를 입력하면 실제 날씨가 표시됩니다.',
)

const filteredWeatherList = computed(() => {
  const keyword = searchQuery.value.trim()

  if (keyword === '') {
    return weatherList.value
  }

  return weatherList.value.filter((weather) => weather.name.includes(keyword))
})

const displayedWeatherList = computed(() => {
  let result = [...filteredWeatherList.value]

  if (showHotOnly.value) {
    result = result.filter((weather) => weather.temp >= 25)
  }

  if (showFavoritesOnly.value) {
    result = result.filter((weather) => favoriteStore.favoriteCityIds.includes(weather.id))
  }

  if (sortOrder.value === 'high') {
    result.sort((a, b) => b.temp - a.temp)
  } else if (sortOrder.value === 'low') {
    result.sort((a, b) => a.temp - b.temp)
  }

  return result
})

const averageTemp = computed(() => {
  if (displayedWeatherList.value.length === 0) {
    return 0
  }

  const total = displayedWeatherList.value.reduce((sum, weather) => sum + weather.temp, 0)
  return Number((total / displayedWeatherList.value.length).toFixed(1))
})

const displayAverageTemp = computed(() => {
  if (configStore.unit === 'fahrenheit') {
    return Math.round(((averageTemp.value * 9) / 5 + 32) * 10) / 10
  }

  return averageTemp.value
})

const hotBoundary = computed(() => (configStore.unit === 'fahrenheit' ? 77 : 25))

watch(selectedCityInfo, (newValue, oldValue) => {
  console.log(`[watch] 선택 도시 변경: ${oldValue || '없음'} -> ${newValue}`)
})

watch(showAverage, (newValue) => {
  console.log(`[watch] 평균 기온 표시: ${newValue ? '켜짐' : '꺼짐'}`)
})

watch(
  [showHotOnly, showFavoritesOnly, sortOrder],
  ([newHotOnly, newFavoritesOnly, newSortOrder]) => {
    console.log(
      `[watch] 필터: ${newHotOnly ? '25도 이상' : '전체'}, 관심 지역: ${newFavoritesOnly ? '켜짐' : '꺼짐'}, 정렬: ${newSortOrder}`,
    )
  },
)

watchEffect(() => {
  console.log(`[watchEffect] 현재 검색어: ${searchQuery.value || '없음'}`)
})

watch(searchQuery, (newQuery) => {
  const routeQuery = typeof route.query.search === 'string' ? route.query.search : ''

  if (newQuery === routeQuery) {
    return
  }

  router.replace({
    query: {
      ...route.query,
      search: newQuery || undefined,
    },
  })
})

const loadLiveWeather = async () => {
  if (!hasOpenWeatherApiKey) {
    weatherMessage.value = '.env.local에 OpenWeather API 키를 입력해 주세요.'
    return
  }

  isWeatherLoading.value = true
  const results = await Promise.allSettled(WEATHER_CITIES.map(fetchCurrentWeather))
  let successCount = 0

  weatherList.value = results.map((result, index) => {
    if (result.status === 'fulfilled') {
      successCount += 1
      return result.value
    }

    const previousWeather = weatherList.value.find(
      (weather) => weather.id === WEATHER_CITIES[index].id,
    )
    return previousWeather || createFallbackWeather(WEATHER_CITIES[index])
  })

  isUsingLiveData.value = successCount > 0

  if (successCount === WEATHER_CITIES.length) {
    lastUpdated.value = new Date()
    weatherMessage.value = '10개 지역의 OpenWeather 실시간 데이터를 불러왔습니다.'
  } else if (successCount > 0) {
    lastUpdated.value = new Date()
    weatherMessage.value = `${successCount}개 지역을 불러왔습니다. 실패한 지역은 이전 값을 표시합니다.`
  } else {
    weatherMessage.value = getOpenWeatherErrorMessage(results[0]?.reason)
  }

  isWeatherLoading.value = false
}

onMounted(async () => {
  if (typeof route.query.search === 'string') {
    searchQuery.value = route.query.search
  }

  if (hasOpenWeatherApiKey) {
    await loadLiveWeather()
  }
})

const updateQuery = (query) => {
  searchQuery.value = query
}

const selectCity = (weather) => {
  selectedCityInfo.value = `${weather.name}이 선택되었습니다.`
}

const openModal = (weather) => {
  selectedWeather.value = weather
}

const closeModal = () => {
  selectedWeather.value = null
}

const moveToDetail = (weather) => {
  router.push({
    name: 'hands-on-7-weather-detail',
    params: { cityId: weather.id },
  })
}

const formatUpdatedTime = (date) => {
  return date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const resetOptions = () => {
  searchQuery.value = ''
  selectedCityInfo.value = ''
  showAverage.value = false
  showHotOnly.value = false
  showFavoritesOnly.value = false
  sortOrder.value = 'default'
  selectedWeather.value = null
}
</script>

<template>
  <section class="view-page weather-home-view">
    <WeatherPageHeader />

    <div class="weather">
      <BaseDashboardCard>
        <div class="api-status-header">
          <h3>🌐 날씨 데이터 연동</h3>
          <button :disabled="isWeatherLoading" @click="loadLiveWeather">
            {{ isWeatherLoading ? '불러오는 중...' : '실시간 날씨 새로고침' }}
          </button>
        </div>
        <p :class="['api-message', { live: isUsingLiveData }]">{{ weatherMessage }}</p>
        <p v-if="lastUpdated" class="updated-time">
          마지막 갱신: {{ formatUpdatedTime(lastUpdated) }}
        </p>

        <h3>🔍 도시 검색</h3>
        <SearchBar :query="searchQuery" @update-query="updateQuery" />

        <div class="search-options">
          <label>
            <input v-model="showHotOnly" type="checkbox" />
            {{ hotBoundary }}{{ configStore.unitSymbol }} 이상만 보기
          </label>

          <label> <input v-model="showFavoritesOnly" type="checkbox" /> 관심 지역만 보기 </label>

          <label>
            기온 정렬
            <select v-model="sortOrder">
              <option value="default">기본순</option>
              <option value="high">높은순</option>
              <option value="low">낮은순</option>
            </select>
          </label>

          <button @click="resetOptions">조건 초기화</button>
        </div>
      </BaseDashboardCard>

      <BaseDashboardCard>
        <h3>🏙️ 지역별 날씨 현황</h3>
        <p class="result-count">
          표시 중인 도시: {{ displayedWeatherList.length }}개 · 관심 지역:
          {{ favoriteStore.favoriteCount }}개
        </p>

        <template v-if="displayedWeatherList.length > 0">
          <WeatherCard
            v-for="weather in displayedWeatherList"
            :key="weather.id"
            :weather="weather"
            @select-card="selectCity"
            @click-modal="openModal"
            @click-route-detail="moveToDetail"
          />
        </template>

        <p v-else class="no-result">검색 또는 필터 조건과 일치하는 도시가 없습니다.</p>

        <label class="average-check">
          <input v-model="showAverage" type="checkbox" /> 검색 결과 평균 기온 보기
        </label>
        <p v-if="showAverage && displayedWeatherList.length > 0" class="average">
          평균 기온: {{ displayAverageTemp }}{{ configStore.unitSymbol }}
        </p>
      </BaseDashboardCard>

      <p class="message">
        {{ selectedCityInfo || '카드를 클릭하거나 검색해 보세요.' }}
      </p>
    </div>

    <WeatherDetailModal v-if="selectedWeather" :weather="selectedWeather" @close="closeModal" />
  </section>
</template>

<style scoped>
.weather-home-view {
  padding: 20px;
  background-color: #fafafa;
}

.weather {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.api-status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.api-status-header button {
  padding: 6px 10px;
}

.api-message {
  padding: 9px;
  margin-bottom: 5px;
  color: #9a6700;
  background-color: #fff8db;
  border-radius: 5px;
  font-size: 13px;
}

.api-message.live {
  color: #08783e;
  background-color: #e8f7ee;
}

.updated-time {
  margin-bottom: 18px;
  color: #777;
  font-size: 12px;
}

.search-options {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.search-options label {
  font-size: 13px;
}

.search-options input {
  margin-right: 3px;
}

.search-options select,
.search-options button {
  padding: 5px;
  margin-left: 4px;
}

.result-count {
  margin-top: 10px;
  color: #666;
  font-size: 13px;
}

.no-result {
  padding: 20px;
  margin-top: 10px;
  color: #d63031;
  background-color: white;
  text-align: center;
}

.average-check {
  display: block;
  margin-top: 15px;
}

.average {
  margin-top: 8px;
  color: #0984e3;
  font-weight: bold;
}

.message {
  padding: 10px;
  margin-top: 15px;
  color: green;
  background-color: #e8f5e9;
  text-align: center;
}

@media (max-width: 520px) {
  .api-status-header {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
