<script setup>
import { ref } from 'vue'

const rawHtmlData = ref('이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.')
const isHtmlMode = ref(false)

const toggleHtmlMode = () => {
  isHtmlMode.value = !isHtmlMode.value
  rawHtmlData.value = isHtmlMode.value
    ? '이 글자는 <span style="color: red; font-weight: bold;">HTML이 렌더링된 결과</span>입니다.'
    : '이 글자는 <span style="color: red; font-weight: bold;">HTML 문자열 그대로 보이는 상태</span>입니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-html 디렉티브 학습</h2>
    <button @click="toggleHtmlMode">모드 전환</button>
    <h3>일반 보간법 사용 결과:</h3>
    <p>{{ rawHtmlData }}</p>
    <br />
    <h3>v-html 디렉티브 사용 결과:</h3>
    <p v-html="rawHtmlData"></p>
  </div>
</template>
