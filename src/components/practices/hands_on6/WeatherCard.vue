<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore.js'
import { useFavoriteWeatherStore } from '@/stores/favoriteWeather.js'

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
  <article class="weather-card" @click="selectCard">
    <div>
      <p>{{ weather.name }} ({{ weather.status }})</p>
      <p>현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
      <span v-if="weather.temp >= 25" class="hot">
        더움 ({{ hotBoundary }}{{ configStore.unitSymbol }} 이상)
      </span>
      <span v-else class="cool"> 선선함 ({{ hotBoundary }}{{ configStore.unitSymbol }} 미만) </span>
    </div>

    <div class="card-buttons">
      <button class="favorite-button" @click.stop="toggleFavorite">
        {{ isFavorite ? '★ 관심 지역 해제' : '☆ 관심 지역 추가' }}
      </button>
      <button @click.stop="openModal">상세보기(모달)</button>
      <button @click.stop="moveToDetail">상세보기(라우터 이동)</button>
    </div>
  </article>
</template>

<style scoped>
.weather-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
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

.card-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-buttons button {
  padding: 6px 10px;
  background-color: white;
  border: 1px solid #999;
  cursor: pointer;
}

.card-buttons .favorite-button {
  color: #b7791f;
  border-color: #d6b35f;
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

@media (max-width: 520px) {
  .weather-card {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
