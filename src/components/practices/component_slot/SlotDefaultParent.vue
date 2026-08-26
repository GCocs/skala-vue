<script setup>
import { ref } from 'vue'
import SlotDefaultChild from './SlotDefaultChild.vue'

const checked = ref(false)
</script>

<template>
  <div class="practice-section">
    <h2>Default Slot</h2>
    <SlotDefaultChild>
      <p>부모에서 작성한 첫 번째 내용입니다.</p>
    </SlotDefaultChild>
    <SlotDefaultChild>
      <p>{{ checked ? '확인했습니다.' : '버튼을 눌러 확인해 주세요.' }}</p>
      <button @click="checked = !checked">확인</button>
    </SlotDefaultChild>
    <SlotDefaultChild />
  </div>
</template>
