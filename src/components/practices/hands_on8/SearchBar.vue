<script setup>
defineProps({
  query: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-query'])

const updateQuery = (event) => {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div class="search-bar">
    <input type="text" :value="query" placeholder="검색할 도시 이름 입력" @input="updateQuery" />
    <p>검색 중인 도시: {{ query || '없음' }}</p>
  </div>
</template>

<style scoped>
.search-bar input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #bbb;
  border-radius: 4px;
}

.search-bar p {
  margin: 4px 0;
}
</style>
