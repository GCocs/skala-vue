<script setup>
import { ref } from 'vue'

const targetUrl = ref('https://www.naver.com')
const logoImgSrc = 'https://vuejs.org/images/logo.png'
const isButtonDisabled = ref(true)
const status = ref('아직 동의하지 않았습니다.')

const toggleLink = () => {
  targetUrl.value = targetUrl.value.includes('naver') ? 'https://www.google.com' : 'https://www.naver.com'
}

const toggleConsent = () => {
  isButtonDisabled.value = !isButtonDisabled.value
  status.value = isButtonDisabled.value ? '아직 동의하지 않았습니다.' : '동의가 완료되어 버튼을 사용할 수 있습니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-bind 디렉티브 기본 (축약형: 콜론)</h2>
    <h3>1) 동적 링크 연결</h3>
    <a :href="targetUrl">{{ targetUrl.includes('naver') ? '네이버로 이동' : '구글로 이동' }}</a>
    <button @click="toggleLink" style="margin-left: 8px">링크 변경</button>
    <br />
    <h3>2) 동적 이미지 연결</h3>
    <img :src="logoImgSrc" alt="Vue 로고" style="width: 100px" />
    <br />
    <h3>3) 버튼 비활성화 제어</h3>
    <p>현재 버튼 상태: {{ isButtonDisabled }}</p>
    <p>{{ status }}</p>
    <button :disabled="isButtonDisabled">동의해야 클릭할 수 있는 버튼</button>
    <button @click="toggleConsent" style="margin-left: 8px">동의 상태 토글</button>
  </div>
</template>
