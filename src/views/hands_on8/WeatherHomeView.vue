<script setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  ElAlert,
  ElButton,
  ElCheckbox,
  ElEmpty,
  ElOption,
  ElSelect,
  ElStatistic,
  ElSwitch,
  ElTag,
} from 'element-plus'
import { createFallbackWeather, WEATHER_CITIES } from '@/data/weatherCities.js'
import {
  fetchCurrentWeather,
  getOpenWeatherErrorMessage,
  hasOpenWeatherApiKey,
} from '@/services/openWeatherApi.js'
import { useConfigStore } from '@/stores/configStore.js'
import { useFavoriteWeatherStore } from '@/stores/favoriteWeather.js'
import BaseDashboardCard from '../../components/practices/hands_on8/BaseDashboardCard.vue'
import SearchBar from '../../components/practices/hands_on8/SearchBar.vue'
import WeatherCard from '../../components/practices/hands_on8/WeatherCard.vue'
import WeatherDetailModal from '../../components/practices/hands_on8/WeatherDetailModal.vue'
import WeatherPageHeader from '../../components/practices/hands_on8/WeatherPageHeader.vue'

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
    name: 'hands-on-8-weather-detail',
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
          <el-button type="primary" :loading="isWeatherLoading" @click="loadLiveWeather">
            실시간 날씨 새로고침
          </el-button>
        </div>
        <el-alert
          :title="weatherMessage"
          :type="isUsingLiveData ? 'success' : 'warning'"
          :closable="false"
          show-icon
        />
        <p v-if="lastUpdated" class="updated-time">
          마지막 갱신: {{ formatUpdatedTime(lastUpdated) }}
        </p>

        <h3>🔍 도시 검색</h3>
        <SearchBar :query="searchQuery" @update-query="updateQuery" />

        <div class="search-options">
          <el-checkbox v-model="showHotOnly">
            {{ hotBoundary }}{{ configStore.unitSymbol }} 이상만 보기
          </el-checkbox>

          <el-checkbox v-model="showFavoritesOnly">관심 지역만 보기</el-checkbox>

          <div class="sort-field">
            <span>기온 정렬</span>
            <el-select v-model="sortOrder" size="small">
              <el-option label="기본순" value="default" />
              <el-option label="높은순" value="high" />
              <el-option label="낮은순" value="low" />
            </el-select>
          </div>

          <el-button size="small" @click="resetOptions">조건 초기화</el-button>
        </div>
      </BaseDashboardCard>

      <BaseDashboardCard>
        <h3>🏙️ 지역별 날씨 현황</h3>
        <div class="result-count">
          <el-tag>표시 중인 도시 {{ displayedWeatherList.length }}개</el-tag>
          <el-tag type="warning">관심 지역 {{ favoriteStore.favoriteCount }}개</el-tag>
        </div>

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

        <el-empty
          v-else
          description="검색 또는 필터 조건과 일치하는 도시가 없습니다."
          :image-size="90"
        />

        <el-switch
          v-model="showAverage"
          class="average-check"
          active-text="검색 결과 평균 기온 보기"
        />
        <el-statistic
          v-if="showAverage && displayedWeatherList.length > 0"
          class="average"
          title="평균 기온"
          :value="displayAverageTemp"
        >
          <template #suffix>{{ configStore.unitSymbol }}</template>
        </el-statistic>
      </BaseDashboardCard>

      <el-alert
        class="selection-message"
        :title="selectedCityInfo || '카드를 클릭하거나 검색해 보세요.'"
        type="info"
        :closable="false"
        show-icon
      />
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

.sort-field {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.sort-field :deep(.el-select) {
  width: 95px;
}

.result-count {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 10px;
}

.average-check {
  margin-top: 15px;
}

.average {
  padding: 12px;
  margin-top: 8px;
  background-color: #ecf5ff;
  border-radius: 6px;
}

.selection-message {
  margin-top: 15px;
}

@media (max-width: 520px) {
  .api-status-header {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
