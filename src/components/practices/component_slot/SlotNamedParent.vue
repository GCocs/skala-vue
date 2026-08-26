<script setup>
import { ref } from 'vue'
import SlotNamedChild from './SlotNamedChild.vue'

const saved = ref(false)
</script>

<template>
  <div class="practice-section">
    <h2>Named Slot</h2>
    <SlotNamedChild>
      <template #header>
        <h3>오늘 할 일</h3>
      </template>
      <p>Vue 슬롯 예제를 Practice 페이지에 연결하기</p>
      <template #footer>
        <button @click="saved = !saved">{{ saved ? '저장됨' : '저장' }}</button>
      </template>
    </SlotNamedChild>
  </div>
</template>
