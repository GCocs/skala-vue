<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import WeatherPageHeader from '../../components/practices/hands_on5/WeatherPageHeader.vue'

const route = useRoute()
const weather = ref(null)
const isLoaded = ref(false)

const weatherList = [
  {
    id: 'city_01',
    name: '서울',
    temp: 28,
    feelsLike: 30,
    status: '맑음',
    humidity: 55,
    wind: 2.1,
    rainfall: 0,
  },
  {
    id: 'city_02',
    name: '수원',
    temp: 24,
    feelsLike: 23,
    status: '비',
    humidity: 78,
    wind: 3.8,
    rainfall: 6,
  },
  {
    id: 'city_03',
    name: '부산',
    temp: 26,
    feelsLike: 27,
    status: '구름',
    humidity: 67,
    wind: 4.2,
    rainfall: 0,
  },
  {
    id: 'city_04',
    name: '제주',
    temp: 22,
    feelsLike: 21,
    status: '바람',
    humidity: 70,
    wind: 7.5,
    rainfall: 1,
  },
  {
    id: 'city_05',
    name: '인천',
    temp: 25,
    feelsLike: 24,
    status: '흐림',
    humidity: 72,
    wind: 5.1,
    rainfall: 0,
  },
  {
    id: 'city_06',
    name: '대전',
    temp: 27,
    feelsLike: 29,
    status: '맑음',
    humidity: 58,
    wind: 1.8,
    rainfall: 0,
  },
  {
    id: 'city_07',
    name: '대구',
    temp: 30,
    feelsLike: 33,
    status: '맑음',
    humidity: 50,
    wind: 1.5,
    rainfall: 0,
  },
  {
    id: 'city_08',
    name: '광주',
    temp: 29,
    feelsLike: 31,
    status: '구름',
    humidity: 62,
    wind: 2.4,
    rainfall: 0,
  },
  {
    id: 'city_09',
    name: '울산',
    temp: 23,
    feelsLike: 22,
    status: '비',
    humidity: 81,
    wind: 4.7,
    rainfall: 8,
  },
  {
    id: 'city_10',
    name: '강릉',
    temp: 21,
    feelsLike: 20,
    status: '맑음',
    humidity: 60,
    wind: 3.2,
    rainfall: 0,
  },
]

onMounted(() => {
  weather.value = weatherList.find((item) => item.id === route.params.cityId) || null
  isLoaded.value = true
})
</script>

<template>
  <section class="detail-page">
    <WeatherPageHeader />

    <article class="detail-view">
      <h2>📊 지역별 상세 기상 관측 정보</h2>

      <p v-if="!isLoaded">기상관측 정보를 확인하고 있습니다.</p>

      <template v-else-if="weather">
        <dl class="weather-detail">
          <div>
            <dt>📍 지정 지역</dt>
            <dd>대한민국 {{ weather.name }}</dd>
          </div>
          <div>
            <dt>도시 코드</dt>
            <dd>{{ weather.id }}</dd>
          </div>
          <div>
            <dt>실시간 기온</dt>
            <dd>{{ weather.temp }}℃</dd>
          </div>
          <div>
            <dt>체감 기온</dt>
            <dd>{{ weather.feelsLike }}℃</dd>
          </div>
          <div>
            <dt>기상 현황</dt>
            <dd>{{ weather.status }}</dd>
          </div>
          <div>
            <dt>대기 습도</dt>
            <dd>{{ weather.humidity }}%</dd>
          </div>
          <div>
            <dt>현재 풍속</dt>
            <dd>{{ weather.wind }}m/s</dd>
          </div>
          <div>
            <dt>강수량</dt>
            <dd>{{ weather.rainfall }}mm</dd>
          </div>
        </dl>

        <RouterLink class="dashboard-button" to="/hands-on/5">← 메인 대시보드 돌아가기</RouterLink>
      </template>

      <div v-else class="missing-weather">
        <h3>도시 정보를 찾지 못했습니다.</h3>
        <p>주소의 도시 코드를 다시 확인해 주세요.</p>
        <RouterLink to="/hands-on/5">대시보드로 돌아가기</RouterLink>
      </div>
    </article>
  </section>
</template>

<style scoped>
.detail-page {
  padding: 20px;
  background-color: #fafafa;
}

.detail-view {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 7px;
}

.detail-view h2 {
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}

.weather-detail {
  padding: 18px;
  background-color: #f0f2f5;
  border-radius: 5px;
}

.weather-detail div {
  display: flex;
  gap: 10px;
  margin: 6px 0;
}

.weather-detail dt {
  min-width: 95px;
  font-weight: bold;
}

.weather-detail dd {
  margin: 0;
}

.dashboard-button {
  display: inline-block;
  padding: 8px 12px;
  margin-top: 15px;
  color: white;
  background-color: #34495e;
  border-radius: 4px;
}

.missing-weather {
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 5px;
}
</style>
