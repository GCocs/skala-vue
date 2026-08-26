<script setup>
import { ref, watch } from 'vue'

const city = ref('서울')
const dateType = ref('오늘')
const result = ref('조건을 변경해 보세요.')

watch([city, dateType], ([newCity, newDate], [oldCity, oldDate]) => {
  result.value = `${oldCity}/${oldDate} → ${newCity}/${newDate}`
  console.log('조회 조건 변경:', newCity, newDate)
})
</script>

<template>
  <div class="practice-section">
    <h2>여러 값 동시에 watch하기</h2>
    <label>
      도시
      <select v-model="city">
        <option>서울</option>
        <option>대전</option>
        <option>부산</option>
      </select>
    </label>

    <label><input v-model="dateType" type="radio" value="오늘" /> 오늘</label>
    <label><input v-model="dateType" type="radio" value="내일" /> 내일</label>
    <label><input v-model="dateType" type="radio" value="주말" /> 주말</label>

    <p>변경 결과: {{ result }}</p>
  </div>
</template>
