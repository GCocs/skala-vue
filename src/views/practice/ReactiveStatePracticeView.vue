<script setup>
import Ref from '../../components/practices/reactive_state/Ref.vue'
import Reactive from '../../components/practices/reactive_state/Reactive.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Reactive State</h1>

    <div class="practice-list">
      <div class="practice-block"><Ref /></div>
      <div class="practice-block"><Reactive /></div>
    </div>
  </section>
</template>
