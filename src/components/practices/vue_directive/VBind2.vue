<script setup>
import { ref } from 'vue'

const isWarning = ref(false)
const themeClass = ref('bg-dark')
const state = ref('안전 상태입니다.')

const toggleTheme = () => {
  isWarning.value = !isWarning.value
  themeClass.value = themeClass.value === 'bg-dark' ? 'bg-light' : 'bg-dark'
  state.value = isWarning.value ? '주의 상태입니다.' : '안전 상태입니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-bind 디렉티브 고급 (클래스 바인딩)</h2>
    <h3>클래스 바인딩 (객체 형식)</h3>
    <p :class="{ 'text-danger': isWarning }">현재 경고 상태: {{ isWarning }}</p>
    <button @click="toggleTheme">경고 상태 토글</button>
    <p>{{ state }}</p>
    <br />
    <h3>클래스 바인딩 (배열 형식)</h3>
    <div :class="[themeClass, isWarning ? 'border-red' : 'border-gray']">
      다중 클래스가 조립된 박스 구역입니다.
    </div>
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
  font-weight: bold;
}
.bg-dark {
  background-color: #333;
  color: white;
  padding: 15px;
}
.bg-light {
  background-color: #f3f3f3;
  color: #222;
  padding: 15px;
}
.border-red {
  border: 3px solid red;
}
.border-gray {
  border: 3px solid #ccc;
}
</style>
