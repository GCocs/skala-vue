<script setup>
import { ElCard } from 'element-plus'
</script>

<template>
  <el-card class="dashboard-card" shadow="never">
    <slot></slot>
  </el-card>
</template>

<style scoped>
.dashboard-card {
  margin-top: 15px;
}

.dashboard-card :deep(.el-card__body) {
  padding: 18px;
}
</style>
