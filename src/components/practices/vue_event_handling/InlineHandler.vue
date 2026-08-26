<script setup>
import { ref } from 'vue'

const count = ref(0)
const status = ref('시작 상태입니다.')

const increase = () => {
  count.value += 1
  status.value = count.value % 2 === 0 ? '짝수 단계입니다.' : '홀수 단계입니다.'
}

const decrease = () => {
  count.value = Math.max(0, count.value - 1)
  status.value = count.value === 0 ? '초기값으로 돌아왔습니다.' : '숫자를 줄였습니다.'
}
</script>

<template>
  <div class="practice-section">
    <button @click="increase">증가</button>
    <button @click="decrease" style="margin-left: 8px">감소</button>
    <p>클릭 수: {{ count }}</p>
    <p>{{ status }}</p>
  </div>
</template>
