<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore.js'
import { ElButton, ElDescriptions, ElDescriptionsItem, ElDialog, ElTag } from 'element-plus'

const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])
const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.weather.temp

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})
</script>

<template>
  <el-dialog
    :model-value="true"
    :title="`${weather.name} 상세 날씨`"
    width="min(420px, 90%)"
    append-to-body
    @close="emit('close')"
  >
    <el-descriptions :column="1" border>
      <el-descriptions-item label="날씨 상태">{{ weather.status }}</el-descriptions-item>
      <el-descriptions-item label="현재 기온">
        {{ displayTemp }}{{ configStore.unitSymbol }}
      </el-descriptions-item>
      <el-descriptions-item label="체감 상태">
        <el-tag :type="weather.temp >= 25 ? 'danger' : 'primary'">
          {{ weather.temp >= 25 ? '더운 날씨입니다.' : '선선한 날씨입니다.' }}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>

    <template #footer>
      <el-button type="primary" @click="emit('close')">닫기</el-button>
    </template>
  </el-dialog>
</template>
