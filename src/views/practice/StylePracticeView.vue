<script setup>
import VueStyle from '../../components/practices/VueStyle.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Vue Style</h1>

    <div class="practice-list">
      <div class="practice-block"><VueStyle /></div>
    </div>
  </section>
</template>
