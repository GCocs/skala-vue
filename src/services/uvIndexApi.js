import axios from 'axios'

const API_KEY = import.meta.env.OPENAPI_KEY?.trim() || ''

const uvIndexApi = axios.create({
  baseURL: 'https://safemap.go.kr/openapi2/IF_0113',
  timeout: 10000,
})

export const hasSafemapApiKey = API_KEY !== ''

const normalizeRegionName = (name = '') => name.replaceAll(' ', '')

const findRegion = (items, city) => {
  const province = normalizeRegionName(city.uvRegion.province)
  const district = normalizeRegionName(city.uvRegion.district)

  return items.find(
    (item) =>
      normalizeRegionName(item.ctprvn_nm).includes(province) &&
      normalizeRegionName(item.signgu_nm) === district,
  )
}

const formatMeasuredAt = (value = '') => {
  const date = String(value)

  if (date.length < 10) {
    return date || '정보 없음'
  }

  const minute = date.length >= 12 ? date.slice(10, 12) : '00'
  return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}. ${date.slice(8, 10)}:${minute}`
}

export const getUvIndexGrade = (value) => {
  if (!Number.isFinite(value)) return '정보 없음'
  if (value <= 2) return '낮음'
  if (value <= 5) return '보통'
  if (value <= 7) return '높음'
  if (value <= 10) return '매우 높음'
  return '위험'
}

export const fetchUvIndex = async (city) => {
  if (!hasSafemapApiKey) {
    throw new Error('SAFEMAP_API_KEY_MISSING')
  }

  const response = await uvIndexApi.get('', {
    params: {
      serviceKey: API_KEY,
      pageNo: 1,
      numOfRows: 300,
      returnType: 'json',
    },
  })

  const { header, body } = response.data
  const resultCode = String(header?.resultCode ?? '')

  if (resultCode !== '00') {
    const error = new Error('SAFEMAP_API_ERROR')
    error.resultCode = resultCode
    throw error
  }

  const items = body?.items?.item || []
  const region = findRegion(Array.isArray(items) ? items : [items], city)

  if (!region) {
    throw new Error('UV_REGION_NOT_FOUND')
  }

  const value = Number(region.ulvry_index)

  return {
    value,
    grade: getUvIndexGrade(value),
    region: `${region.ctprvn_nm} ${region.signgu_nm}`.trim(),
    measuredAt: formatMeasuredAt(region.occrrnc_dt),
  }
}

export const getSafemapErrorMessage = (error) => {
  const resultCode = String(error?.resultCode ?? error?.response?.data?.header?.resultCode ?? '')

  if (error?.message === 'SAFEMAP_API_KEY_MISSING') {
    return '.env.local에 생활안전지도 API 키를 입력해 주세요.'
  }

  if (resultCode === '30') {
    return '생활안전지도 API 키가 등록되지 않았거나 자외선지수 사용 승인이 필요합니다.'
  }

  if (error?.message === 'UV_REGION_NOT_FOUND') {
    return '선택한 지역의 자외선지수 정보가 없습니다.'
  }

  if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
    return '자외선지수 응답 시간이 초과되었습니다.'
  }

  return '자외선지수 정보를 가져오지 못했습니다.'
}
