<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { createFallbackWeather, WEATHER_CITIES } from '@/data/weatherCities.js'
import { fetchCurrentAirQuality, getAirQualityGrade } from '@/services/airQualityApi.js'
import {
  fetchCurrentWeather,
  fetchWeatherForecast,
  getOpenWeatherErrorMessage,
  hasOpenWeatherApiKey,
} from '@/services/openWeatherApi.js'
import { fetchUvIndex, getSafemapErrorMessage, hasSafemapApiKey } from '@/services/uvIndexApi.js'
import { useConfigStore } from '@/stores/configStore.js'
import UvIndexPanel from '../../components/practices/hands_on7/UvIndexPanel.vue'
import WeatherPageHeader from '../../components/practices/hands_on7/WeatherPageHeader.vue'

const route = useRoute()
const configStore = useConfigStore()
const city = WEATHER_CITIES.find((item) => item.id === route.params.cityId)
const weather = ref(city ? createFallbackWeather(city) : null)
const forecastList = ref([])
const airQuality = ref(null)
const uvIndex = ref(null)
const isLoaded = ref(false)
const weatherMessage = ref('')
const forecastMessage = ref('')
const airQualityMessage = ref('')
const uvIndexMessage = ref('')

const displayTemp = computed(() => {
  if (!weather.value) {
    return 0
  }

  const rawTemp = weather.value.temp

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})

const displayFeelsLike = computed(() => {
  if (!weather.value) {
    return 0
  }

  const rawTemp = weather.value.feelsLike

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})

const airQualityGrade = computed(() => {
  return airQuality.value ? getAirQualityGrade(airQuality.value.aqi) : ''
})

const displayForecastTemp = (temp) => {
  if (configStore.unit === 'fahrenheit') {
    return Math.round((temp * 9) / 5 + 32)
  }

  return temp
}

const formatForecastDate = (dateTime) => {
  return new Date(dateTime).toLocaleDateString('ko-KR', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  })
}

onMounted(async () => {
  if (!city) {
    isLoaded.value = true
    return
  }

  const [currentResult, forecastResult, airQualityResult, uvIndexResult] = await Promise.allSettled(
    [
      hasOpenWeatherApiKey ? fetchCurrentWeather(city) : Promise.resolve(null),
      hasOpenWeatherApiKey ? fetchWeatherForecast(city) : Promise.resolve([]),
      fetchCurrentAirQuality(city),
      hasSafemapApiKey ? fetchUvIndex(city) : Promise.reject(new Error('SAFEMAP_API_KEY_MISSING')),
    ],
  )

  if (currentResult.status === 'fulfilled' && currentResult.value) {
    weather.value = currentResult.value
    weatherMessage.value = 'OpenWeather 실시간 관측 데이터를 표시하고 있습니다.'
  } else if (!hasOpenWeatherApiKey) {
    weatherMessage.value = '.env.local에 API 키가 없어 이전 실습 데이터를 표시합니다.'
  } else {
    weatherMessage.value = getOpenWeatherErrorMessage(currentResult.reason)
  }

  if (forecastResult.status === 'fulfilled') {
    forecastList.value = forecastResult.value
    if (!hasOpenWeatherApiKey) {
      forecastMessage.value = '.env.local에 API 키를 입력하면 5일 예보가 표시됩니다.'
    }
  } else {
    forecastMessage.value = getOpenWeatherErrorMessage(forecastResult.reason)
  }

  if (airQualityResult.status === 'fulfilled') {
    airQuality.value = airQualityResult.value
  } else {
    airQualityMessage.value = '대기질 정보를 가져오지 못했습니다.'
  }

  if (uvIndexResult.status === 'fulfilled') {
    uvIndex.value = uvIndexResult.value
  } else {
    uvIndexMessage.value = getSafemapErrorMessage(uvIndexResult.reason)
  }

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
        <p :class="['source-message', { live: weather.source === 'openweather' }]">
          {{ weatherMessage }}
        </p>

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
            <dd>{{ displayTemp }}{{ configStore.unitSymbol }}</dd>
          </div>
          <div>
            <dt>체감 기온</dt>
            <dd>{{ displayFeelsLike }}{{ configStore.unitSymbol }}</dd>
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

        <section class="api-panel">
          <h3>🗓️ OpenWeather 5일 예보</h3>
          <p v-if="forecastMessage" class="panel-message">{{ forecastMessage }}</p>

          <div v-if="forecastList.length > 0" class="forecast-list">
            <article v-for="forecast in forecastList" :key="forecast.dateTime">
              <strong>{{ formatForecastDate(forecast.dateTime) }}</strong>
              <span>{{ displayForecastTemp(forecast.temp) }}{{ configStore.unitSymbol }}</span>
              <small>{{ forecast.status }}</small>
            </article>
          </div>
          <small class="api-source">
            날씨 데이터:
            <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
              OpenWeather
            </a>
          </small>
        </section>

        <section class="api-panel">
          <h3>🌫️ Open-Meteo 현재 대기질</h3>
          <p v-if="airQualityMessage" class="panel-message">{{ airQualityMessage }}</p>

          <dl v-if="airQuality" class="air-quality-detail">
            <div>
              <dt>US AQI</dt>
              <dd>{{ airQuality.aqi }} · {{ airQualityGrade }}</dd>
            </div>
            <div>
              <dt>초미세먼지</dt>
              <dd>{{ airQuality.pm25 }}㎍/㎥</dd>
            </div>
            <div>
              <dt>미세먼지</dt>
              <dd>{{ airQuality.pm10 }}㎍/㎥</dd>
            </div>
            <div>
              <dt>측정 시각</dt>
              <dd>{{ airQuality.measuredAt }}</dd>
            </div>
          </dl>
          <small class="api-source">
            대기질 데이터:
            <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
              Open-Meteo
            </a>
          </small>
        </section>

        <UvIndexPanel :uv-index="uvIndex" :message="uvIndexMessage" />

        <RouterLink class="dashboard-button" to="/hands-on/7">
          ← 메인 대시보드 돌아가기
        </RouterLink>
      </template>

      <div v-else class="missing-weather">
        <h3>도시 정보를 찾지 못했습니다.</h3>
        <p>주소의 도시 코드를 다시 확인해 주세요.</p>
        <RouterLink to="/hands-on/7">대시보드로 돌아가기</RouterLink>
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

.source-message,
.panel-message {
  padding: 9px;
  margin-bottom: 12px;
  color: #9a6700;
  background-color: #fff8db;
  border-radius: 5px;
  font-size: 13px;
}

.source-message.live {
  color: #08783e;
  background-color: #e8f7ee;
}

.api-panel {
  padding-top: 18px;
  margin-top: 20px;
  border-top: 1px solid #ddd;
}

.api-panel h3 {
  margin-bottom: 12px;
  font-size: 17px;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px;
}

.forecast-list article {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 12px 8px;
  background-color: #f0f2f5;
  border-radius: 5px;
  text-align: center;
}

.forecast-list span {
  color: #1684ed;
  font-weight: bold;
}

.air-quality-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 15px;
  background-color: #f0f2f5;
  border-radius: 5px;
}

.air-quality-detail div {
  display: flex;
  gap: 8px;
}

.air-quality-detail dt {
  font-weight: bold;
}

.air-quality-detail dd {
  margin: 0;
}

.api-source {
  display: block;
  margin-top: 10px;
  color: #777;
  text-align: right;
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

@media (max-width: 520px) {
  .air-quality-detail {
    grid-template-columns: 1fr;
  }
}
</style>
