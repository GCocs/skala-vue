<script setup>
import VModel from '../../components/practices/form_data_binding/VModel.vue'
import FormElementsHandling from '../../components/practices/form_data_binding/FormElementsHandling.vue'
import VModelModifiers from '../../components/practices/form_data_binding/VModelModifiers.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Form Data Binding</h1>

    <div class="practice-list">
      <div class="practice-block"><VModel /></div>
      <div class="practice-block"><FormElementsHandling /></div>
      <div class="practice-block"><VModelModifiers /></div>
    </div>
  </section>
</template>
