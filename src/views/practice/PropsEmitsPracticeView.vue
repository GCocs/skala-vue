<script setup>
import DefineEmitsParent from '../../components/practices/props_and_emits/DefineEmitsParent.vue'
import DefineEmitsParent2 from '../../components/practices/props_and_emits/DefineEmitsParent2.vue'
import PropsEmitsParent from '../../components/practices/props_and_emits/PropsEmitsParent.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Props & Emits</h1>

    <div class="practice-list">
      <div class="practice-block"><DefineEmitsParent /></div>
      <div class="practice-block"><DefineEmitsParent2 /></div>
      <div class="practice-block"><PropsEmitsParent /></div>
    </div>
  </section>
</template>
