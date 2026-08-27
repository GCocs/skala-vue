<script setup>
import { ElAlert, ElDescriptions, ElDescriptionsItem, ElLink, ElTag } from 'element-plus'

defineProps({
  uvIndex: {
    type: Object,
    default: null,
  },
  message: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="uv-panel">
    <h3>☀️ 자외선지수 정보</h3>
    <el-alert v-if="message" :title="message" type="warning" :closable="false" show-icon />

    <div v-if="uvIndex" class="uv-content">
      <div class="uv-value">
        <strong>{{ uvIndex.value }}</strong>
        <el-tag type="warning" effect="dark">{{ uvIndex.grade }}</el-tag>
      </div>

      <el-descriptions :column="1" border size="small">
        <el-descriptions-item label="조회 지역">{{ uvIndex.region }}</el-descriptions-item>
        <el-descriptions-item label="발표 시각">{{ uvIndex.measuredAt }}</el-descriptions-item>
      </el-descriptions>
    </div>

    <small class="api-source">
      자외선 데이터:
      <el-link
        href="https://www.safemap.go.kr/opna/data/dataViewRenew.do?objtId=232"
        type="success"
        target="_blank"
      >
        생활안전지도
      </el-link>
    </small>
  </section>
</template>

<style scoped>
.uv-panel {
  padding-top: 18px;
  margin-top: 20px;
  border-top: 1px solid #ddd;
}

.uv-panel h3 {
  margin-bottom: 12px;
  font-size: 17px;
}

.uv-panel :deep(.el-alert) {
  margin-bottom: 12px;
}

.uv-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background-color: #fff7df;
  border-radius: 5px;
}

.uv-value {
  min-width: 90px;
  text-align: center;
}

.uv-value strong {
  display: block;
  color: #e67e22;
  font-size: 32px;
}

.uv-value span {
  font-weight: bold;
}

.uv-content :deep(.el-descriptions) {
  flex: 1;
}

.api-source {
  display: block;
  margin-top: 10px;
  color: #777;
  text-align: right;
}

@media (max-width: 520px) {
  .uv-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
