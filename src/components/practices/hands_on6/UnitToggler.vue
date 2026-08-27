<script setup>
import { useConfigStore } from '@/stores/configStore.js'

const configStore = useConfigStore()
</script>

<template>
  <div class="unit-toggler">
    <span>
      날씨 단위: {{ configStore.unit === 'celsius' ? '섭씨' : '화씨' }} ({{
        configStore.unitSymbol
      }})
    </span>
    <button @click="configStore.toggleUnit">단위변경</button>
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

.unit-toggler button {
  padding: 5px 8px;
  color: white;
  background-color: #5d6d7e;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}
</style>
