<script setup>
import WeatherPageHeader from '../../components/practices/hands_on6/WeatherPageHeader.vue'
</script>

<template>
  <section class="guide-page">
    <WeatherPageHeader />

    <article class="guide-view">
      <h2>📖 날씨 상태 안내</h2>
      <p>날씨 카드에 표시되는 상태를 간단히 정리했습니다.</p>

      <ul>
        <li><strong>맑음</strong><span>야외 활동하기 좋은 날씨</span></li>
        <li><strong>구름·흐림</strong><span>기온 변화 확인이 필요한 날씨</span></li>
        <li><strong>비</strong><span>외출할 때 우산이 필요한 날씨</span></li>
        <li><strong>바람</strong><span>풍속과 체감 기온을 확인할 날씨</span></li>
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
