<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  ElAlert,
  ElButton,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElResult,
  ElSkeleton,
  ElTag,
} from 'element-plus'
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
import UvIndexPanel from '../../components/practices/hands_on8/UvIndexPanel.vue'
import WeatherPageHeader from '../../components/practices/hands_on8/WeatherPageHeader.vue'

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

    <el-card class="detail-view" shadow="never">
      <h2>📊 지역별 상세 기상 관측 정보</h2>

      <el-skeleton v-if="!isLoaded" :rows="8" animated />

      <template v-else-if="weather">
        <el-alert
          :title="weatherMessage"
          :type="weather.source === 'openweather' ? 'success' : 'warning'"
          :closable="false"
          show-icon
        />

        <el-descriptions class="weather-detail" :column="2" border>
          <el-descriptions-item label="📍 지정 지역">
            대한민국 {{ weather.name }}
          </el-descriptions-item>
          <el-descriptions-item label="도시 코드">{{ weather.id }}</el-descriptions-item>
          <el-descriptions-item label="실시간 기온">
            {{ displayTemp }}{{ configStore.unitSymbol }}
          </el-descriptions-item>
          <el-descriptions-item label="체감 기온">
            {{ displayFeelsLike }}{{ configStore.unitSymbol }}
          </el-descriptions-item>
          <el-descriptions-item label="기상 현황">
            <el-tag type="primary">{{ weather.status }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="대기 습도">{{ weather.humidity }}%</el-descriptions-item>
          <el-descriptions-item label="현재 풍속">{{ weather.wind }}m/s</el-descriptions-item>
          <el-descriptions-item label="강수량">{{ weather.rainfall }}mm</el-descriptions-item>
        </el-descriptions>

        <section class="api-panel">
          <h3>🗓️ OpenWeather 5일 예보</h3>
          <el-alert
            v-if="forecastMessage"
            :title="forecastMessage"
            type="warning"
            :closable="false"
            show-icon
          />

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
          <el-alert
            v-if="airQualityMessage"
            :title="airQualityMessage"
            type="warning"
            :closable="false"
            show-icon
          />

          <el-descriptions v-if="airQuality" class="air-quality-detail" :column="2" border>
            <el-descriptions-item label="US AQI">
              {{ airQuality.aqi }} · {{ airQualityGrade }}
            </el-descriptions-item>
            <el-descriptions-item label="초미세먼지">
              {{ airQuality.pm25 }}㎍/㎥
            </el-descriptions-item>
            <el-descriptions-item label="미세먼지">
              {{ airQuality.pm10 }}㎍/㎥
            </el-descriptions-item>
            <el-descriptions-item label="측정 시각">
              {{ airQuality.measuredAt }}
            </el-descriptions-item>
          </el-descriptions>
          <small class="api-source">
            대기질 데이터:
            <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
              Open-Meteo
            </a>
          </small>
        </section>

        <UvIndexPanel :uv-index="uvIndex" :message="uvIndexMessage" />

        <RouterLink v-slot="{ navigate }" custom to="/hands-on/8">
          <el-button class="dashboard-button" type="primary" @click="navigate">
            ← 메인 대시보드 돌아가기
          </el-button>
        </RouterLink>
      </template>

      <el-result
        v-else
        icon="warning"
        title="도시 정보를 찾지 못했습니다."
        sub-title="주소의 도시 코드를 다시 확인해 주세요."
      >
        <template #extra>
          <RouterLink v-slot="{ navigate }" custom to="/hands-on/8">
            <el-button type="primary" @click="navigate">대시보드로 돌아가기</el-button>
          </RouterLink>
        </template>
      </el-result>
    </el-card>
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
}

.detail-view h2 {
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}

.weather-detail {
  margin-top: 15px;
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

.api-panel :deep(.el-alert) {
  margin-bottom: 12px;
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
  margin-top: 10px;
}

.api-source {
  display: block;
  margin-top: 10px;
  color: #777;
  text-align: right;
}

.dashboard-button {
  margin-top: 15px;
}

@media (max-width: 520px) {
  .air-quality-detail {
    grid-template-columns: 1fr;
  }
}
</style>
