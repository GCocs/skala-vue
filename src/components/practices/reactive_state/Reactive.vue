<script setup>
import { reactive } from 'vue'

defineOptions({ name: 'ReactivePractice' })

const user = reactive({ name: '박지수', age: 24 })
const supplies = reactive(['노트', '연필'])

const changeUser = () => {
  user.name = user.name === '박지수' ? '최유진' : '박지수'
  user.age++
}

const addSupply = () => {
  supplies.push(`준비물 ${supplies.length + 1}`)
}

const removeSupply = (index) => {
  supplies.splice(index, 1)
}
</script>

<template>
  <div class="practice-section">
    <h2>reactive로 객체와 배열 변경하기</h2>
    <p>이름: {{ user.name }} / 나이: {{ user.age }}세</p>
    <button @click="changeUser">사용자 값 변경</button>

    <ul>
      <li v-for="(supply, index) in supplies" :key="index">
        {{ supply }}
        <button @click="removeSupply(index)">삭제</button>
      </li>
    </ul>
    <button @click="addSupply">준비물 추가</button>
  </div>
</template>
