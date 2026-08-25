<script setup>
import { ref } from 'vue'

const isLogged = ref(false)
const score = ref(85)
const status = ref('로그인 전 상태입니다.')

const toggleLogin = () => {
  isLogged.value = !isLogged.value
  status.value = isLogged.value ? '회원 전용 화면에 접근했습니다.' : '로그인 전 상태입니다.'
}

const addScore = () => {
  score.value = Math.min(score.value + 5, 100)
}
</script>

<template>
  <div class="practice-section">
    <h2>v-if, v-else-if, v-else 디렉티브 학습</h2>
    <p>{{ status }}</p>
    <h3>1) 기본 로그인 상태 스위치</h3>
    <p v-if="isLogged">환영합니다! 회원 전용 화면입니다.</p>
    <p v-else>로그인이 필요합니다. 먼저 로그인해 주세요.</p>
    <button @click="toggleLogin">
      {{ isLogged ? '로그아웃 하기' : '로그인 하기' }}
    </button>
    <br />
    <h3>2) 성적별 학점 등급 측정</h3>
    <label>현재 점수 입력: </label>
    <input type="number" v-model="score" min="0" max="100" step="5" />
    <button @click="addScore" style="margin-left: 8px">점수 +5</button>
    <br />
    <div v-if="score >= 90" style="color: green; font-weight: bold">합격 등급: A 학점</div>
    <div v-else-if="score >= 80" style="color: blue">합격 등급: B 학점</div>
    <div v-else-if="score >= 70" style="color: orange">합격 등급: C 학점</div>
    <div v-else style="color: red; font-weight: bold">합격 등급: F 학점</div>
  </div>
</template>
