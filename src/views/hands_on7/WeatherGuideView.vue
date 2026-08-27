<script setup>
import WeatherPageHeader from '../../components/practices/hands_on7/WeatherPageHeader.vue'
</script>

<template>
  <section class="guide-page">
    <WeatherPageHeader />

    <article class="guide-view">
      <h2>📖 날씨 API 안내</h2>
      <p>실습 7에서 사용한 API와 데이터를 간단히 정리했습니다.</p>

      <ul>
        <li><strong>현재 날씨</strong><span>OpenWeather Current Weather API</span></li>
        <li><strong>5일 예보</strong><span>OpenWeather 5 Day / 3 Hour Forecast API</span></li>
        <li><strong>대기질</strong><span>Open-Meteo Air Quality API</span></li>
        <li><strong>자외선지수</strong><span>생활안전지도 자외선지수 API</span></li>
        <li><strong>API Key</strong><span>.env.local 파일에서 관리</span></li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.guide-page {
  padding: 20px;
  background-color: #fafafa;
}

.guide-view {
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 7px;
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

.guide-view ul {
  display: grid;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.guide-view li {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 16px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 7px;
}

.guide-view span {
  color: #666;
}
</style>
