<script setup>
import { ref, watch } from 'vue'

const user = ref({
  name: '민수',
  info: {
    age: 22,
    city: '서울',
  },
})
const deepMessage = ref('변경 전')
const ageMessage = ref('변경 전')

watch(
  user,
  (newUser) => {
    deepMessage.value = `${newUser.name}, ${newUser.info.age}세, ${newUser.info.city}`
  },
  { deep: true },
)

watch(
  () => user.value.info.age,
  (newAge, oldAge) => {
    ageMessage.value = `${oldAge}세에서 ${newAge}세로 변경`
  },
)
</script>

<template>
  <div class="practice-section">
    <h2>중첩 객체 watch하기</h2>
    <p>이름: <input v-model="user.name" /></p>
    <p>{{ user.info.age }}세 / {{ user.info.city }}</p>
    <button @click="user.info.age++">나이 증가</button>
    <button @click="user.info.city = user.info.city === '서울' ? '부산' : '서울'">
      도시 변경
    </button>
    <p>전체 감시: {{ deepMessage }}</p>
    <p>나이 감시: {{ ageMessage }}</p>
  </div>
</template>
