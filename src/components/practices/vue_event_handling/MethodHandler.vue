<script setup>
import { ref } from 'vue'

const count = ref(0)
const message = ref('아직 버튼을 누르지 않았습니다.')

function handleClick(type = 'add') {
  if (type === 'add') {
    count.value += 2
    message.value = count.value >= 10 ? '10을 넘어서 강제 리셋 상태가 됩니다.' : '추가 버튼을 눌러 숫자가 2 증가했습니다.'

    if (count.value >= 10) {
      count.value = 0
      message.value = '10을 넘어서 자동으로 초기화되었습니다.'
    }
    return
  }

  count.value = 0
  message.value = '초기화 버튼을 눌러 숫자를 다시 0으로 돌렸습니다.'
}
</script>

<template>
  <div class="practice-section">
    <p>현재 값: {{ count }}</p>
    <button @click="handleClick('add')">추가</button>
    <button @click="handleClick('reset')" style="margin-left: 8px">초기화</button>
    <p>{{ message }}</p>
  </div>
</template>
