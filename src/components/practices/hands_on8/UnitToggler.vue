<script setup>
import { useConfigStore } from '@/stores/configStore.js'
import { ElButton } from 'element-plus'

const configStore = useConfigStore()
</script>

<template>
  <div class="unit-toggler">
    <span>
      날씨 단위: {{ configStore.unit === 'celsius' ? '섭씨' : '화씨' }} ({{
        configStore.unitSymbol
      }})
    </span>
    <el-button size="small" type="primary" plain @click="configStore.toggleUnit">
      단위변경
    </el-button>
  </div>
</template>

<style scoped>
.unit-toggler {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 13px;
}
</style>
