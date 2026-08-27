import axios from 'axios'

const airQualityApi = axios.create({
  baseURL: 'https://air-quality-api.open-meteo.com/v1',
  timeout: 10000,
})

export const fetchCurrentAirQuality = async (city) => {
  const response = await airQualityApi.get('/air-quality', {
    params: {
      latitude: city.latitude,
      longitude: city.longitude,
      current: 'us_aqi,pm2_5,pm10',
      timezone: 'Asia/Seoul',
    },
  })

  return {
    aqi: response.data.current.us_aqi,
    pm25: response.data.current.pm2_5,
    pm10: response.data.current.pm10,
    measuredAt: response.data.current.time,
  }
}

export const getAirQualityGrade = (aqi) => {
  if (!Number.isFinite(aqi)) return '정보 없음'
  if (aqi <= 50) return '좋음'
  if (aqi <= 100) return '보통'
  if (aqi <= 150) return '민감군 주의'
  if (aqi <= 200) return '나쁨'
  if (aqi <= 300) return '매우 나쁨'
  return '위험'
}
