<script setup>
import { ref } from 'vue'

const name = ref('홍길동')
const age = ref(20)
const status = ref('이름 기준으로 메모 영역을 갱신합니다.')

const changeName = () => {
  name.value = name.value === '홍길동' ? '이순신' : '홍길동'
  status.value = 'name이 바뀌어서 v-memo 영역이 다시 계산되었습니다.'
}

const addAge = () => {
  age.value += 1
  status.value = 'age만 바뀌었지만, v-memo는 name이 아니어서 유지됩니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-memo 디렉티브 학습</h2>
    <p>{{ status }}</p>
    <div v-memo="[name]" style="padding: 20px; border: 1px solid #42b883; margin-bottom: 10px">
      <p>v-memo 적용 영역</p>
      <p>이름: {{ name }}</p>
      <p>나이: {{ age }}</p>
    </div>
    <button @click="changeName">이름 변경</button>
    <button @click="addAge" style="margin-left: 8px">나이 +1</button>
  </div>
</template>
