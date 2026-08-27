<script setup>
import { ref } from 'vue'
import { ElCard, ElInputNumber, ElRate } from 'element-plus'

const productQuantity = ref(1)
const productRate = ref(4)
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <strong>상품 주문 연습</strong>
    </template>

    <div class="option-row">
      <span>구매 수량</span>
      <el-input-number v-model="productQuantity" :min="1" :max="10" />
    </div>

    <div class="option-row">
      <span>상품 별점</span>
      <el-rate v-model="productRate" show-score score-template="{value}점" />
    </div>
  </el-card>
</template>

<style scoped>
.option-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 18px;
}

@media (max-width: 480px) {
  .option-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
