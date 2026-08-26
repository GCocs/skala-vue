<script setup>
import InlineHandler from '../../components/practices/vue_event_handling/InlineHandler.vue'
import MethodHandler from '../../components/practices/vue_event_handling/MethodHandler.vue'
import VOn from '../../components/practices/vue_event_handling/VOn.vue'
import EventObject from '../../components/practices/vue_event_handling/EventObject.vue'
import EventModifier from '../../components/practices/vue_event_handling/EventModifier.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Event Handling</h1>

    <div class="practice-list">
      <div class="practice-block"><InlineHandler /></div>
      <div class="practice-block"><MethodHandler /></div>
      <div class="practice-block"><VOn /></div>
      <div class="practice-block"><EventObject /></div>
      <div class="practice-block"><EventModifier /></div>
    </div>
  </section>
</template>
