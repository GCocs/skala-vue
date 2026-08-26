<script setup>
import SlotDefaultParent from '../../components/practices/component_slot/SlotDefaultParent.vue'
import SlotNamedParent from '../../components/practices/component_slot/SlotNamedParent.vue'
import SlotScopedParent from '../../components/practices/component_slot/SlotScopedParent.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Component Slot</h1>

    <div class="practice-list">
      <div class="practice-block"><SlotDefaultParent /></div>
      <div class="practice-block"><SlotNamedParent /></div>
      <div class="practice-block"><SlotScopedParent /></div>
    </div>
  </section>
</template>
