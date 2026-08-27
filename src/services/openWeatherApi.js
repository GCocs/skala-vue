import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY?.trim() || ''

const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 10000,
})

export const hasOpenWeatherApiKey = API_KEY !== ''

const getRequestParams = (city) => {
  if (!hasOpenWeatherApiKey) {
    throw new Error('OPENWEATHER_API_KEY_MISSING')
  }

  return {
    lat: city.latitude,
    lon: city.longitude,
    appid: API_KEY,
    units: 'metric',
    lang: 'kr',
  }
}

export const fetchCurrentWeather = async (city) => {
  const response = await openWeatherApi.get('/weather', {
    params: getRequestParams(city),
  })
  const data = response.data

  return {
    id: city.id,
    name: city.name,
    latitude: city.latitude,
    longitude: city.longitude,
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    status: data.weather?.[0]?.description || '정보 없음',
    humidity: data.main.humidity,
    wind: data.wind.speed,
    rainfall: data.rain?.['1h'] || 0,
    icon: data.weather?.[0]?.icon || '',
    updatedAt: data.dt * 1000,
    source: 'openweather',
  }
}

export const fetchWeatherForecast = async (city) => {
  const response = await openWeatherApi.get('/forecast', {
    params: getRequestParams(city),
  })

  return response.data.list
    .filter((_, index) => index % 8 === 0)
    .slice(0, 5)
    .map((item) => ({
      dateTime: item.dt * 1000,
      temp: Math.round(item.main.temp),
      status: item.weather?.[0]?.description || '정보 없음',
      icon: item.weather?.[0]?.icon || '',
    }))
}

export const getOpenWeatherErrorMessage = (error) => {
  if (error?.message === 'OPENWEATHER_API_KEY_MISSING') {
    return '.env.local에 OpenWeather API 키를 입력해 주세요.'
  }

  if (axios.isAxiosError(error) && error.response?.status === 401) {
    return 'OpenWeather API 키를 확인해 주세요.'
  }

  if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
    return 'OpenWeather 응답 시간이 초과되었습니다.'
  }

  return 'OpenWeather 데이터를 가져오지 못했습니다.'
}
