<script setup>
import { ref } from 'vue'

const mode = ref('welcome')
const randomValue = ref(Math.ceil(Math.random() * 100))

const toggleMode = () => {
  mode.value = mode.value === 'welcome' ? 'practice' : 'welcome'
  randomValue.value = Math.ceil(Math.random() * 100)
}

const refreshValue = () => {
  randomValue.value = Math.ceil(Math.random() * 100)
}
</script>

<template>
  <div class="practice-section">
    <h2>{{ mode === 'welcome' ? 'Welcome to Skala-Vue' : 'Practice Mode On' }}</h2>
    <p>{{ mode === 'welcome' ? '기본 화면' : '실습 화면' }}</p>
    <p>Random number: {{ randomValue }}</p>
    <button @click="toggleMode">모드 전환</button>
    <button @click="refreshValue" style="margin-left: 8px">숫자 다시 뽑기</button>
  </div>
</template>
