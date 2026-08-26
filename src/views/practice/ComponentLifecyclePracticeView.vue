<script setup>
import { ref } from 'vue'
import ComponentLifecycleHook from '../../components/practices/component_lifecycle/ComponentLifecycleHook.vue'

const showComponent = ref(true)
</script>

<template>
  <section class="view-page">
    <RouterLink class="back-link" to="/practice">← Practice 목록</RouterLink>
    <h1 class="page-title">Component Lifecycle</h1>

    <button @click="showComponent = !showComponent">
      {{ showComponent ? '컴포넌트 마운트 해제' : '컴포넌트 다시 마운트' }}
    </button>
    <p>현재 상태: {{ showComponent ? '마운트됨' : '마운트 해제됨' }}</p>

    <div v-if="showComponent" class="practice-list">
      <div class="practice-block"><ComponentLifecycleHook /></div>
    </div>
  </section>
</template>
