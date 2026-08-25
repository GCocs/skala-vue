<script setup>
import { ref } from 'vue'

const inputValue = ref('<strong>안전한 예시</strong>')
const message = ref('<strong>안전한 예시</strong>')

const showMessage = () => {
  message.value = inputValue.value || '<strong>입력값이 비어 있습니다.</strong>'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-html XSS 학습</h2>
    <input v-model="inputValue" placeholder="HTML 태그를 넣어보세요" />
    <button @click="showMessage">확인</button>
    <div v-html="message"></div>
  </div>
</template>
