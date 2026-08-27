<script setup>
import CounterStore from '../../components/practices/pinia_basic/CounterStore.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Pinia Basic</h1>

    <div class="practice-list">
      <div class="practice-block"><CounterStore /></div>
    </div>
  </section>
</template>
