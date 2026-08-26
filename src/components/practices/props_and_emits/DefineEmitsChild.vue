<script setup>
import { ref } from 'vue'

const emit = defineEmits(['send-message'])
const clickCount = ref(0)

const sendToParent = () => {
  clickCount.value++
  emit('send-message', `자식 버튼을 ${clickCount.value}번 눌렀습니다.`)
}
</script>

<template>
  <button @click="sendToParent">메시지 보내기</button>
</template>
