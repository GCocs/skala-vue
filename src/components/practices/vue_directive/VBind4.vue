<script setup>
import { ref } from 'vue'

const id = ref('user-profile-card')
const src = 'https://vuejs.org/images/logo.png'
const cardSize = ref(80)
const message = ref('기본 카드 상태입니다.')

const toggleCard = () => {
  if (id.value === 'user-profile-card') {
    id.value = 'highlighted-card'
    cardSize.value = 110
    message.value = '강조 상태로 바뀌었습니다.'
  } else {
    id.value = 'user-profile-card'
    cardSize.value = 80
    message.value = '기본 카드 상태입니다.'
  }
}
</script>

<template>
  <div class="practice-section">
    <h2>v-bind 디렉티브 고급 (단축 문법)</h2>
    <p>{{ message }}</p>
    <div :id="id" :style="{ width: cardSize + 'px' }">
      <img :src alt="Vue 로고" style="width: 100%; height: auto" />
    </div>
    <button @click="toggleCard">카드 상태 토글</button>
  </div>
</template>
