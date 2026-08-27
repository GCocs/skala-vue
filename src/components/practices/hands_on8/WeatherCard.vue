<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore.js'
import { useFavoriteWeatherStore } from '@/stores/favoriteWeather.js'
import { ElButton, ElCard, ElTag } from 'element-plus'

const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-card', 'click-modal', 'click-route-detail'])
const configStore = useConfigStore()
const favoriteStore = useFavoriteWeatherStore()

const displayTemp = computed(() => {
  const rawTemp = props.weather.temp

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})

const hotBoundary = computed(() => (configStore.unit === 'fahrenheit' ? 77 : 25))
const isFavorite = computed(() => favoriteStore.favoriteCityIds.includes(props.weather.id))

const selectCard = () => {
  emit('select-card', props.weather)
}

const openModal = () => {
  emit('click-modal', props.weather)
}

const moveToDetail = () => {
  emit('click-route-detail', props.weather)
}

const toggleFavorite = () => {
  favoriteStore.toggleFavorite(props.weather.id)
}
</script>

<template>
  <el-card class="weather-card" shadow="hover" @click="selectCard">
    <div class="weather-summary">
      <p class="city-name">{{ weather.name }} ({{ weather.status }})</p>
      <p>현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
      <el-tag v-if="weather.source === 'openweather'" size="small" type="success">
        OpenWeather 실시간
      </el-tag>
      <el-tag v-if="weather.temp >= 25" class="temperature-tag" type="danger" effect="dark">
        더움 ({{ hotBoundary }}{{ configStore.unitSymbol }} 이상)
      </el-tag>
      <el-tag v-else class="temperature-tag" type="primary" effect="dark">
        선선함 ({{ hotBoundary }}{{ configStore.unitSymbol }} 미만)
      </el-tag>
    </div>

    <div class="card-buttons">
      <el-button type="warning" plain @click.stop="toggleFavorite">
        {{ isFavorite ? '★ 관심 지역 해제' : '☆ 관심 지역 추가' }}
      </el-button>
      <el-button type="primary" plain @click.stop="openModal">상세보기(모달)</el-button>
      <el-button type="primary" @click.stop="moveToDetail">상세보기(라우터 이동)</el-button>
    </div>
  </el-card>
</template>

<style scoped>
.weather-card {
  margin-top: 10px;
  cursor: pointer;
}

.weather-card :deep(.el-card__body) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.weather-card p {
  margin: 3px 0;
}

.city-name {
  font-weight: bold;
}

.card-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-buttons :deep(.el-button + .el-button) {
  margin-left: 0;
}

.temperature-tag {
  display: flex;
  width: fit-content;
  margin-top: 7px;
}

@media (max-width: 520px) {
  .weather-card :deep(.el-card__body) {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
