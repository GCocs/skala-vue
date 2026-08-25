<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
const mode = ref('normal')

const toggleBox = () => {
  isVisible.value = !isVisible.value
  mode.value = isVisible.value ? 'normal' : 'hidden'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-show 디렉티브 학습</h2>
    <p>현재 상태: {{ mode }}</p>
    <button @click="toggleBox">화면 토글하기</button>
    <br />
    <div v-show="isVisible" class="box">
      <p>v-show 상자</p>
      <p>조건이 false가 되면 CSS display: none이 적용됩니다.</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  padding: 10px;
  margin-top: 5px;
  color: white;
  border-radius: 5px;
  background-color: #3498db;
}
</style>
