<script setup>
import { ref } from 'vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

const message = ref('부모가 보낸 첫 메시지')

const handleUpdate = (newMessage) => {
  message.value = newMessage
}
</script>

<template>
  <div class="practice-section">
    <h2>Props와 Emits 같이 사용하기</h2>
    <p>부모 데이터: {{ message }}</p>
    <PropsEmitsChild :parent-data="message" @update-request="handleUpdate" />
  </div>
</template>
