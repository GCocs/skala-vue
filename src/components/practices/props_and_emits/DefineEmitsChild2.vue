<script setup>
const props = defineProps({
  cityName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['select-city'])

const selectCity = () => {
  emit('select-city', props.cityName)
}
</script>

<template>
  <button class="weather-card" @click="selectCity">
    {{ cityName }} ({{ status }})
  </button>
</template>
