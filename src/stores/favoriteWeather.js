import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteWeatherStore = defineStore('favorite-weather', () => {
  const favoriteCityIds = ref([])

  const favoriteCount = computed(() => favoriteCityIds.value.length)

  function toggleFavorite(cityId) {
    if (favoriteCityIds.value.includes(cityId)) {
      favoriteCityIds.value = favoriteCityIds.value.filter((id) => id !== cityId)
      return
    }

    favoriteCityIds.value.push(cityId)
  }

  return { favoriteCityIds, favoriteCount, toggleFavorite }
})
