<script setup>
import SampleOne from '../../components/practices/sample/SampleOne.vue'
import SampleTwo from '../../components/practices/sample/SampleTwo.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Sample</h1>

    <div class="practice-list">
      <div class="practice-block"><SampleOne /></div>
      <div class="practice-block"><SampleTwo /></div>
    </div>
  </section>
</template>
