<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'

const count = ref(0)
let timerId = null

console.log('[setup] 컴포넌트 생성')

onMounted(() => {
  console.log('[onMounted] 화면에 표시됨')
  timerId = setInterval(() => {
    count.value++
  }, 2000)
})

onUpdated(() => {
  console.log('[onUpdated] count:', count.value)
})

onUnmounted(() => {
  clearInterval(timerId)
  console.log('[onUnmounted] 타이머 종료')
})
</script>

<template>
  <div class="practice-section">
    <h2>Lifecycle Hook</h2>
    <p>2초마다 증가하는 값: {{ count }}</p>
    <button @click="count++">직접 증가</button>
    <button @click="count = 0">0으로 초기화</button>
  </div>
</template>
