<script setup>
import { ref } from 'vue'

const content = ref('안녕하세요! <strong>Skala-Vue</strong> 강의입니다.')
const mode = ref('text')

const toggleMode = () => {
  mode.value = mode.value === 'text' ? 'html' : 'text'
  content.value = mode.value === 'text'
    ? '안녕하세요! <strong>Skala-Vue</strong> 강의입니다.'
    : '리액트처럼 보이는 문자열이 아닙니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-text 디렉티브 학습</h2>
    <button @click="toggleMode">모드 전환</button>
    <h3>1) 일반 보간법 결과:</h3>
    <p>출력: {{ content }}</p>
    <br />
    <h3>2) v-text 디렉티브 결과:</h3>
    <p v-text="'출력: ' + content"></p>
    <br />
    <h3>3) v-html 결과 비교:</h3>
    <p v-html="content"></p>
  </div>
</template>
