<script setup>
import { ref } from 'vue'

const message = ref('안녕하세요!')
const inputValue = ref('Vue는 보간 처리 없이 그대로 출력합니다.')

const updateMessage = () => {
  message.value = inputValue.value || '빈 값입니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-pre 디렉티브 학습</h2>
    <input v-model="inputValue" placeholder="문자를 입력해보세요" />
    <button @click="updateMessage" style="margin-left: 8px">값 반영</button>
    <p>일반 출력: {{ message }}</p>
    <p v-pre>v-pre 출력: {{ message }}</p>
  </div>
</template>