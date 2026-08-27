<script setup>
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()
</script>

<template>
  <div class="practice-section">
    <h2>Counter Store 활용 실습</h2>
    <p>현재 숫자: {{ counterStore.count }}</p>
    <p>두 배로 계산한 숫자: {{ counterStore.doubleCount }}</p>

    <div class="counter-buttons">
      <button @click="counterStore.decrement">1 감소</button>
      <button @click="counterStore.increment">1 증가</button>
      <button @click="counterStore.reset">처음으로</button>
    </div>
  </div>
</template>

<style scoped>
.counter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
