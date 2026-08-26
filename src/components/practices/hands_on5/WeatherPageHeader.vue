<template>
  <header class="weather-page-header">
    <h1>🌤️ 과제 4: 라우터 적용</h1>

    <nav class="weather-navigation">
      <RouterLink to="/hands-on/5">🌦️ 날씨 대시보드</RouterLink>
      <span>|</span>
      <RouterLink to="/hands-on/5/about">ℹ️ 서비스 소개</RouterLink>
      <span>|</span>
      <RouterLink to="/hands-on/5/guide">📖 날씨 안내</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.weather-page-header {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
}

.weather-page-header h1 {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 25px;
}

.weather-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
}

.weather-navigation a {
  color: #666;
  font-weight: bold;
}

.weather-navigation a.router-link-exact-active {
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.weather-navigation span {
  color: #ddd;
}

@media (max-width: 520px) {
  .weather-navigation {
    align-items: flex-start;
    flex-direction: column;
  }

  .weather-navigation span {
    display: none;
  }
}
</style>
