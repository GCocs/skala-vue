<script setup>
import { ref } from 'vue'

const message = ref('현재 접속 상태 정상')
const userCount = ref(12)

const addUser = () => {
  userCount.value++
}
</script>

<template>
  <div class="base-card">
    <slot :text="message" :count="userCount" :increase="addUser">
      <p>{{ message }} / 접속자 {{ userCount }}명</p>
    </slot>
  </div>
</template>
