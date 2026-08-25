<script setup>
import { ref } from 'vue'

const message = ref('느린 네트워크에서도 안전하게 출력되는 메시지!')
const isReady = ref(false)

const loadMessage = () => {
  isReady.value = true
  message.value = 'Vue가 준비된 뒤에 표시되는 메시지입니다.'
}
</script>

<template>
  <div v-cloak class="practice-section">
    <h2>v-cloak 디렉티브 학습</h2>
    <p>{{ message }}</p>
    <button @click="loadMessage">메시지 준비 완료</button>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none !important;
}
</style>
