<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="not-found">
    <div class="not-found-card">
      <div class="not-found-icon">☀️ ❓</div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>요청하신 주소가 존재하지 않거나 아직 개발되지 않았습니다.</p>
      <small>{{ route.path }}</small>
      <RouterLink to="/hands-on/5">날씨 메인으로 이동</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 30px 20px;
  background-color: #f3f4f6;
  text-align: center;
}

.not-found-card {
  width: 100%;
  max-width: 430px;
  padding: 55px 35px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgb(0 0 0 / 12%);
}

.not-found-icon {
  margin-bottom: 25px;
  font-size: 55px;
}

.not-found-card h1 {
  font-size: 27px;
}

.not-found-card p {
  margin: 15px 0 8px;
  color: #777;
}

.not-found-card small {
  display: block;
  margin-bottom: 25px;
  color: #aaa;
}

.not-found-card a {
  display: inline-block;
  padding: 10px 22px;
  color: white;
  background-color: #1684ed;
  border-radius: 22px;
  font-weight: bold;
}
</style>
