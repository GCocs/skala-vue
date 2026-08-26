<script setup>
import { ref } from 'vue'

const count = ref(0)
const message = ref('아직 동작이 없습니다.')

const showAlert = () => {
  count.value += 1
  message.value = count.value % 3 === 0 ? '3의 배수 카운트입니다.' : '일반 카운트 증가 중입니다.'
  alert(`${message.value} 현재 카운트: ${count.value}`)
}

const resetCount = () => {
  count.value = 0
  message.value = '리셋되었습니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-on 이벤트 핸들링 기초</h2>
    <h3>1) 인라인 연산 처리</h3>
    <p>현재 카운트: {{ count }}</p>
    <button @click="count++; message = count % 2 === 0 ? '짝수 값으로 바뀌었습니다.' : '홀수 값으로 바뀌었습니다.'">1씩 증가</button>
    <button @click="resetCount" style="margin-left: 8px">초기화</button>
    <br />
    <h3>2) 스크립트 함수 호출</h3>
    <button @click="showAlert">알림창 띄우기</button>
    <p>{{ message }}</p>
  </div>
</template>
