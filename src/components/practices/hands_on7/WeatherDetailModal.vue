<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore.js'

const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])
const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.weather.temp

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})
</script>

<template>
  <div class="modal-backdrop" role="dialog" aria-modal="true" @click.self="emit('close')">
    <div class="modal-content">
      <h3>{{ weather.name }} 상세 날씨</h3>
      <p>날씨 상태: {{ weather.status }}</p>
      <p>현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
      <p>{{ weather.temp >= 25 ? '더운 날씨입니다.' : '선선한 날씨입니다.' }}</p>
      <button @click="emit('close')">닫기</button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  z-index: 10;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgb(0 0 0 / 45%);
}

.modal-content {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
}

.modal-content h3 {
  margin-bottom: 15px;
}

.modal-content p {
  margin: 8px 0;
}

.modal-content button {
  width: 100%;
  padding: 8px;
  margin-top: 15px;
}
</style>
