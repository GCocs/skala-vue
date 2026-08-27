<script setup>
import AxiosWeather from '../../components/practices/axios/AxiosWeather.vue'
import AxiosJson from '../../components/practices/axios/AxiosJson.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Axios</h1>

    <div class="practice-list">
      <div class="practice-block"><AxiosWeather /></div>
      <div class="practice-block"><AxiosJson /></div>
    </div>
  </section>
</template>
