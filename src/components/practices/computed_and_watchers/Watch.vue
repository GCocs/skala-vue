<script setup>
import { ref, watch } from 'vue'

defineOptions({ name: 'WatchPractice' })

const currentCity = ref('서울')
const logMessage = ref('도시를 바꿔 보세요.')
const changeCount = ref(0)

watch(currentCity, (newCity, oldCity) => {
  changeCount.value++
  logMessage.value = `${oldCity}에서 ${newCity}(으)로 변경됨`
  console.log('선택한 도시:', newCity)
})
</script>

<template>
  <div class="practice-section">
    <h2>watch로 값 변경 확인</h2>
    <p>현재 도시: {{ currentCity }}</p>
    <button @click="currentCity = '서울'">서울</button>
    <button @click="currentCity = '대전'">대전</button>
    <button @click="currentCity = '부산'">부산</button>
    <p>{{ logMessage }}</p>
    <p>변경 횟수: {{ changeCount }}</p>
  </div>
</template>
