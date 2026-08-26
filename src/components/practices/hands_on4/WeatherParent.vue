<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import BaseDashboardCard from './BaseDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import WeatherCard from './WeatherCard.vue'
import WeatherDetailModal from './WeatherDetailModal.vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 22, status: '바람' },
  { id: 'city_05', name: '인천', temp: 25, status: '흐림' },
  { id: 'city_06', name: '대전', temp: 27, status: '맑음' },
  { id: 'city_07', name: '대구', temp: 30, status: '맑음' },
  { id: 'city_08', name: '광주', temp: 29, status: '구름' },
  { id: 'city_09', name: '울산', temp: 23, status: '비' },
  { id: 'city_10', name: '강릉', temp: 21, status: '맑음' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('')
const showAverage = ref(false)
const showHotOnly = ref(false)
const sortOrder = ref('default')
const selectedWeather = ref(null)

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
  return (total / displayedWeatherList.value.length).toFixed(1)
})

watch(selectedCityInfo, (newValue, oldValue) => {
  console.log(`[watch] 선택 도시 변경: ${oldValue || '없음'} -> ${newValue}`)
})

watch(showAverage, (newValue) => {
  console.log(`[watch] 평균 기온 표시: ${newValue ? '켜짐' : '꺼짐'}`)
})

watch([showHotOnly, sortOrder], ([newHotOnly, newSortOrder]) => {
  console.log(`[watch] 필터: ${newHotOnly ? '25도 이상' : '전체'}, 정렬: ${newSortOrder}`)
})

watchEffect(() => {
  console.log(`[watchEffect] 현재 검색어: ${searchQuery.value || '없음'}`)
})

const updateQuery = (query) => {
  searchQuery.value = query
}

const selectCity = (weather) => {
  selectedCityInfo.value = `${weather.name}이 선택되었습니다.`
}

const showDetail = (weather) => {
  selectedWeather.value = weather
}

const closeDetail = () => {
  selectedWeather.value = null
}

const resetOptions = () => {
  searchQuery.value = ''
  selectedCityInfo.value = ''
  showAverage.value = false
  showHotOnly.value = false
  sortOrder.value = 'default'
  selectedWeather.value = null
}
</script>

<template>
  <div class="weather">
    <h2>과제 3: 날씨 (컴포넌트)</h2>

    <BaseDashboardCard>
      <h3>도시 검색</h3>
      <SearchBar :query="searchQuery" @update-query="updateQuery" />

      <div class="search-options">
        <label><input v-model="showHotOnly" type="checkbox" /> 25도 이상만 보기</label>

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
      <h3>지역별 날씨 현황</h3>
      <p class="result-count">표시 중인 도시: {{ displayedWeatherList.length }}개</p>

      <template v-if="displayedWeatherList.length > 0">
        <WeatherCard
          v-for="weather in displayedWeatherList"
          :key="weather.id"
          :weather="weather"
          @select-card="selectCity"
          @click-detail="showDetail"
        />
      </template>

      <p v-else class="no-result">검색 또는 필터 조건과 일치하는 도시가 없습니다.</p>

      <label class="average-check">
        <input v-model="showAverage" type="checkbox" /> 검색 결과 평균 기온 보기
      </label>
      <p v-if="showAverage && displayedWeatherList.length > 0" class="average">
        평균 기온: {{ averageTemp }}℃
      </p>
    </BaseDashboardCard>

    <p class="message">
      {{ selectedCityInfo || '카드를 클릭하거나 검색해 보세요.' }}
    </p>

    <WeatherDetailModal
      v-if="selectedWeather"
      :weather="selectedWeather"
      @close="closeDetail"
    />
  </div>
</template>

<style scoped>
.weather {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.weather h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
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
</style>
