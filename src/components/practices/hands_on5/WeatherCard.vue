<script setup>
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-card', 'click-modal', 'click-route-detail'])

const selectCard = () => {
  emit('select-card', props.weather)
}

const openModal = () => {
  emit('click-modal', props.weather)
}

const moveToDetail = () => {
  emit('click-route-detail', props.weather)
}
</script>

<template>
  <article class="weather-card" @click="selectCard">
    <div>
      <p>{{ weather.name }} ({{ weather.status }})</p>
      <p>현재 기온: {{ weather.temp }}℃</p>
      <span v-if="weather.temp >= 25" class="hot">더움 (25도 이상)</span>
      <span v-else class="cool">선선함 (25도 미만)</span>
    </div>

    <div class="card-buttons">
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
