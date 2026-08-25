<script setup>
import { ref } from 'vue'

let normalCount = 0
const vueCount = ref(0)
const status = ref('대기 중')

const increaseNormal = () => {
  normalCount += 1
  status.value = `일반 변수 값: ${normalCount}`
}

const increaseVue = () => {
  vueCount.value += 2
  status.value = `Vue 반응형 값: ${vueCount.value}`
}

const resetBoth = () => {
  normalCount = 0
  vueCount.value = 0
  status.value = '초기값으로 초기화됨'
}
</script>

<template>
  <div class="practice-section">
    <h2>Hello Skala-Vue</h2>
    <p>{{ status }}</p>
    <h3>일반 변수 클릭: {{ normalCount }}</h3>
    <button @click="increaseNormal">일반 변수 +1</button>
    <h3>Vue 반응성 변수 클릭: {{ vueCount }}</h3>
    <button @click="increaseVue" style="margin-left: 8px">Vue 반응성 변수 +2</button>
    <br /><br />
    <button @click="resetBoth">둘 다 초기화</button>
  </div>
</template>
