<script setup>
import { ref } from 'vue'

defineOptions({ name: 'RefPractice' })

const count = ref(1)
const name = ref('김민수')
const isActive = ref(false)
const items = ref(['사과', '배'])
const user = ref({ name: '이순신', age: 30 })

const increaseCount = () => {
  count.value += 2
}

const addItem = () => {
  items.value.push(`과일 ${items.value.length + 1}`)
}

const changeUser = () => {
  user.value.name = '장보고'
  user.value.age++
}
</script>

<template>
  <div class="practice-section">
    <h2>ref로 값 변경하기</h2>
    <p>카운트: {{ count }}</p>
    <button @click="increaseCount">2씩 증가</button>

    <p>이름: <input v-model="name" /> {{ name }}</p>
    <p>상태: {{ isActive ? '활성' : '비활성' }}</p>
    <button @click="isActive = !isActive">상태 바꾸기</button>

    <p>과일 목록: {{ items.join(', ') }}</p>
    <button @click="addItem">과일 추가</button>

    <p>{{ user.name }} / {{ user.age }}세</p>
    <button @click="changeUser">사용자 정보 변경</button>
  </div>
</template>
