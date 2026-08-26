<script setup>
import { ref } from 'vue'

defineProps({
  parentData: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-request'])
const requestCount = ref(0)

const sendNotification = () => {
  requestCount.value++
  emit('update-request', `자식에서 보낸 ${requestCount.value}번째 메시지`)
}
</script>

<template>
  <div class="child-container">
    <h3>자식 컴포넌트</h3>
    <p>props로 받은 값: {{ parentData }}</p>
    <button @click="sendNotification">부모 데이터 바꾸기</button>
  </div>
</template>
