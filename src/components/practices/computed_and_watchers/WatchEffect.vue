<script setup>
import { ref, watchEffect } from 'vue'

const city = ref('서울')
const temperature = ref(22)
const summary = ref('')

watchEffect(() => {
  summary.value = `${city.value}의 현재 기온은 ${temperature.value}도입니다.`
  console.log('watchEffect 실행:', city.value, temperature.value)
})
</script>

<template>
  <div class="practice-section">
    <h2>watchEffect 자동 감시</h2>
    <p>{{ summary }}</p>
    <button @click="city = city === '서울' ? '제주' : '서울'">도시 바꾸기</button>
    <button @click="temperature++">기온 올리기</button>
    <button @click="temperature--">기온 내리기</button>
  </div>
</template>
