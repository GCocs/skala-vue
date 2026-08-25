<script setup>
import { ref } from 'vue'

const count = ref(1)
const label = ref('초기 값으로 고정된 영역입니다.')

const increase = () => {
  count.value += 1
  label.value = `현재 count: ${count.value}`
}
</script>

<template>
  <div class="practice-section">
    <h2>v-once 디렉티브 학습</h2>
    <p>일반 변수 (실시간): {{ count }}</p>
    <p v-once>v-once 변수 (최초 고정): {{ count }}</p>
    <p>{{ label }}</p>
    <button @click="increase">숫자 증가 버튼</button>
  </div>
</template>
