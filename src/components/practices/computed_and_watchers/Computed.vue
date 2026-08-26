<script setup>
import { computed, ref } from 'vue'

defineOptions({ name: 'ComputedPractice' })

const price = ref(1500)
const quantity = ref(1)
const refreshCount = ref(0)

const getTotal = () => {
  console.log('일반 함수 실행')
  return price.value * quantity.value
}

const totalPrice = computed(() => {
  console.log('computed 실행')
  return price.value * quantity.value
})
</script>

<template>
  <div class="practice-section">
    <h2>computed와 일반 함수 비교</h2>
    <p>가격: {{ price }}원 / 수량: {{ quantity }}</p>
    <button @click="quantity++">수량 증가</button>
    <button @click="refreshCount++">관계없는 값 변경</button>
    <p>관계없는 값: {{ refreshCount }}</p>
    <p>일반 함수 결과: {{ getTotal() }}원</p>
    <p>computed 결과: {{ totalPrice }}원</p>
  </div>
</template>
