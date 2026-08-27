<script setup>
import { ElCard, ElDescriptions, ElDescriptionsItem, ElTag } from 'element-plus'
import WeatherPageHeader from '../../components/practices/hands_on8/WeatherPageHeader.vue'
</script>

<template>
  <section class="guide-page">
    <WeatherPageHeader />

    <el-card class="guide-view" shadow="never">
      <h2>📖 API 및 UI 안내</h2>
      <p>실습 8에서 사용한 API와 UI 라이브러리를 간단히 정리했습니다.</p>

      <el-descriptions :column="1" border>
        <el-descriptions-item label="현재 날씨"
          >OpenWeather Current Weather API</el-descriptions-item
        >
        <el-descriptions-item label="5일 예보">
          OpenWeather 5 Day / 3 Hour Forecast API
        </el-descriptions-item>
        <el-descriptions-item label="대기질">Open-Meteo Air Quality API</el-descriptions-item>
        <el-descriptions-item label="자외선지수">
          생활안전지도 자외선지수 API
        </el-descriptions-item>
        <el-descriptions-item label="API Key">.env.local 파일에서 관리</el-descriptions-item>
        <el-descriptions-item label="UI Library">
          <el-tag type="primary">Element Plus</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </section>
</template>

<style scoped>
.guide-page {
  padding: 20px;
  background-color: #fafafa;
}

.guide-view {
  max-width: 700px;
  margin: 0 auto;
}

.guide-view h2 {
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}

.guide-view > p {
  margin: 10px 0 20px;
  color: #666;
}
</style>
