<script setup>
import { ref } from 'vue'

const position = ref('아직 좌표가 없습니다.')
const tagName = ref('아직 선택된 태그가 없습니다.')
const message = ref('버튼을 눌러 이벤트 객체를 확인해보세요.')
const counter = ref(0)

const getOnlyEvent = (e) => {
  position.value = `좌표: X=${e.clientX}, Y=${e.clientY}`
  counter.value += 1
  message.value = `클릭 ${counter.value}회: 좌표 정보를 확인했습니다.`
}

const getWithParam = (name, e) => {
  tagName.value = `대상: ${name} / 클릭된 태그: ${e.target.tagName}`
  counter.value += 2
  message.value = `${name}님이 ${e.target.tagName}을 클릭해서 점수가 ${counter.value}점이 되었습니다.`
}
</script>

<template>
  <div class="practice-section">
    <h2>v-on 이벤트 객체($event) 활용</h2>
    <p>{{ message }}</p>
    <p>좌표: {{ position }}</p>
    <p>태그: {{ tagName }}</p>
    <p>점수: {{ counter }}</p>
    <button @click="getOnlyEvent">클릭 좌표 알아내기</button>
    <button @click="getWithParam('회원A', $event)" style="margin-left: 8px">회원 정보와 태그 확인</button>
  </div>
</template>
