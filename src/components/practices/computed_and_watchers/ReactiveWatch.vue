<script setup>
import { reactive, ref, watch } from 'vue'

const product = reactive({
  name: '무선 키보드',
  price: 35000,
})
const objectMessage = ref('상품 변경 전')
const priceMessage = ref('가격 변경 전')

watch(product, (newProduct, oldProduct) => {
  objectMessage.value = `이전 ${oldProduct.price}원 / 현재 ${newProduct.price}원`
})

watch(
  () => product.price,
  (newPrice, oldPrice) => {
    priceMessage.value = `${oldPrice}원 → ${newPrice}원`
  },
)
</script>

<template>
  <div class="practice-section">
    <h2>reactive 데이터 watch하기</h2>
    <p>{{ product.name }} / {{ product.price }}원</p>
    <button @click="product.price += 2000">가격 2,000원 올리기</button>
    <button @click="product.name = product.name === '무선 키보드' ? '무선 마우스' : '무선 키보드'">
      상품명 바꾸기
    </button>
    <p>객체 전체 감시: {{ objectMessage }}</p>
    <p>가격만 감시: {{ priceMessage }}</p>
  </div>
</template>
