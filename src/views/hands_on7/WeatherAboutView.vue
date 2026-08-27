<script setup>
import WeatherPageHeader from '../../components/practices/hands_on7/WeatherPageHeader.vue'
</script>

<template>
  <section class="about-page">
    <WeatherPageHeader />

    <article class="info-view">
      <h2>ℹ️ 서비스 소개</h2>

      <div class="about-box">
        <p>본 앱은 Vue 3 및 Vue Router 기반으로 제작된 실습용 기상 관측 대시보드입니다.</p>
        <ul>
          <li><code>components/practices/hands_on7/</code> 폴더 내부의 독립 부품 연동</li>
          <li>클라이언트 라우팅을 이용한 새로고침 없는 화면 전환</li>
          <li>OpenWeather API를 이용한 현재 날씨와 단기 예보 조회</li>
          <li>Open-Meteo API를 이용한 지역별 대기질 확인</li>
          <li>생활안전지도 API를 이용한 지역별 자외선지수 확인</li>
          <li>Pinia Store를 이용한 날씨 단위와 관심 지역 상태 공유</li>
        </ul>
      </div>

      <RouterLink class="home-link" to="/hands-on/7">대시보드 홈으로 이동</RouterLink>
    </article>
  </section>
</template>

<style scoped>
.about-page {
  padding: 20px;
  background-color: #fafafa;
}

.info-view {
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 7px;
}

.info-view h2 {
  padding-bottom: 12px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}

.about-box {
  padding: 18px;
  background-color: #f0f2f5;
  border-radius: 5px;
}

.about-box ul {
  margin: 12px 0 0;
  padding-left: 20px;
}

.about-box li {
  margin: 7px 0;
}

.about-box code {
  color: #e67e22;
  background-color: white;
}

.home-link {
  display: block;
  padding: 9px;
  margin-top: 15px;
  color: white;
  background-color: #3498db;
  border-radius: 4px;
  text-align: center;
}
</style>
