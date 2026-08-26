<script setup>
import SlotScopedChild from './SlotScopedChild.vue'
</script>
<template>
  <div class="practice-section">
    <h2>Scoped Slot</h2>
    <SlotScopedChild v-slot="{ text, count, increase }">
      <div class="display-panel">
        <p>{{ text }}</p>
        <p>접속자 수: {{ count }}명</p>
        <button @click="increase">접속자 수 증가</button>
      </div>
    </SlotScopedChild>
    <SlotScopedChild />
  </div>
</template>
