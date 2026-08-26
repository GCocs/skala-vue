<script setup>
import { ref } from 'vue'

defineOptions({ name: 'WeatherPractice' })

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 22, status: '바람' },
])

const searchCity = ref('')
const selectedCity = ref('')

const inputCity = (event) => {
  searchCity.value = event.target.value
}

const selectCity = (cityName) => {
  selectedCity.value = `${cityName}이 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="weather">
    <h2>🌤️ 과제 1: 날씨 (Mockup)</h2>

    <div class="search-box">
      <h3>🔍 도시 검색</h3>
      <input
        type="text"
        :value="searchCity"
        @input="inputCity"
        placeholder="검색할 도시 이름 입력"
      />
      <p>검색 중인 도시: {{ searchCity }}</p>
    </div>

    <div class="weather-box">
      <h3>🏙️ 지역별 날씨 현황</h3>

      <div
        v-for="weather in weatherList"
        :key="weather.id"
        class="weather-card"
        @click="selectCity(weather.name)"
      >
        <div>
          <p>{{ weather.name }} ({{ weather.status }})</p>
          <p>현재 기온: {{ weather.temp }}℃</p>

          <span v-if="weather.temp >= 25" class="hot">🔥 더움 (25도 이상)</span>
          <span v-else class="cool">❄️ 선선함 (25도 미만)</span>
        </div>

        <button @click.stop="showDetail(weather.name, weather.status)">상세보기</button>
      </div>
    </div>

    <p class="message">
      {{ selectedCity || '카드를 클릭하거나 검색해 보세요.' }}
    </p>
  </div>
</template>

<style scoped>
.weather {
  width: 600px;
  padding: 20px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.weather h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}

.search-box,
.weather-box {
  padding: 15px;
  margin-top: 15px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.search-box input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
}

.weather-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.weather-card p {
  margin: 3px 0;
}

.weather-card button {
  padding: 6px 10px;
  background-color: white;
  border: 1px solid #999;
  cursor: pointer;
}

.hot,
.cool {
  display: inline-block;
  padding: 3px 7px;
  margin-top: 5px;
  color: white;
  border-radius: 3px;
  font-size: 12px;
}

.hot {
  background-color: #ff6b6b;
}

.cool {
  background-color: #74b9ff;
}

.message {
  padding: 10px;
  margin-top: 15px;
  color: green;
  background-color: #e8f5e9;
  text-align: center;
}
</style>
