<script setup>
import { ref } from 'vue'
import DefineEmitsChild from './DefineEmitsChild.vue'

const receivedMessage = ref('아직 받은 메시지가 없습니다.')

const handleMessage = (message) => {
  receivedMessage.value = message
}
</script>

<template>
  <div class="practice-section">
    <h2>defineEmits 기본 예제</h2>
    <DefineEmitsChild @send-message="handleMessage" />
    <p>{{ receivedMessage }}</p>
  </div>
</template>
