<script setup>
import Computed from '../../components/practices/computed_and_watchers/Computed.vue'
import Watch from '../../components/practices/computed_and_watchers/Watch.vue'
import MultiSourceWatch from '../../components/practices/computed_and_watchers/MultiSourceWatch.vue'
import DeepWatch from '../../components/practices/computed_and_watchers/DeepWatch.vue'
import ReactiveWatch from '../../components/practices/computed_and_watchers/ReactiveWatch.vue'
import WatchEffect from '../../components/practices/computed_and_watchers/WatchEffect.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Computed & Watchers</h1>

    <div class="practice-list">
      <div class="practice-block"><Computed /></div>
      <div class="practice-block"><Watch /></div>
      <div class="practice-block"><MultiSourceWatch /></div>
      <div class="practice-block"><DeepWatch /></div>
      <div class="practice-block"><ReactiveWatch /></div>
      <div class="practice-block"><WatchEffect /></div>
    </div>
  </section>
</template>
