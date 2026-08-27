<script setup>
import FileControl from '../../components/practices/element-plus/FileControl.vue'
import ProductOrder from '../../components/practices/element-plus/ProductOrder.vue'
import RegisterForm from '../../components/practices/element-plus/RegisterForm.vue'
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Element Plus</h1>

    <div class="element-practice-list">
      <RegisterForm />
      <ProductOrder />
      <FileControl />
    </div>
  </section>
</template>

<style scoped>
.element-practice-list {
  display: grid;
  gap: 20px;
  max-width: 720px;
}
</style>
