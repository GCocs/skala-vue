<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const items = ref([])
const textInput = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleRead = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    console.log('GET 성공:', response.data)
  } catch (error) {
    console.error('GET 실패:', error)
    errorMessage.value = '목록을 가져오지 못했습니다.'
  } finally {
    isLoading.value = false
  }
}

const handleCreate = async () => {
  const title = textInput.value.trim()

  if (!title) {
    return
  }

  errorMessage.value = ''

  try {
    const response = await axios.post(BASE_URL, {
      title,
      body: '',
      userId: 1,
    })

    items.value.unshift({ ...response.data, title })
    textInput.value = ''
    console.log('POST 성공:', response.data)
  } catch (error) {
    console.error('POST 실패:', error)
    errorMessage.value = '새 항목을 추가하지 못했습니다.'
  }
}

const handleUpdate = async (item) => {
  const changedText = window.prompt('수정할 텍스트를 입력하세요.', item.title)

  if (changedText === null || changedText.trim() === '') {
    return
  }

  errorMessage.value = ''

  try {
    const response = await axios.put(`${BASE_URL}/${item.id}`, {
      ...item,
      title: changedText.trim(),
    })
    const index = items.value.findIndex((currentItem) => currentItem.id === item.id)

    if (index !== -1) {
      items.value[index] = { ...response.data, title: changedText.trim() }
    }

    console.log('PUT 성공:', response.data)
  } catch (error) {
    console.error('PUT 실패:', error)
    errorMessage.value = '항목을 수정하지 못했습니다.'
  }
}

const handleDelete = async (id) => {
  errorMessage.value = ''

  try {
    await axios.delete(`${BASE_URL}/${id}`)
    items.value = items.value.filter((item) => item.id !== id)
    console.log('DELETE 성공:', id)
  } catch (error) {
    console.error('DELETE 실패:', error)
    errorMessage.value = '항목을 삭제하지 못했습니다.'
  }
}

onMounted(handleRead)
</script>

<template>
  <section class="axios-crud">
    <h2>⚡ Axios CRUD 프로토타입 훈련</h2>

    <form class="create-form" @submit.prevent="handleCreate">
      <input v-model="textInput" type="text" placeholder="저장할 텍스트를 입력하세요" />
      <button type="submit" :disabled="!textInput.trim()">POST (추가)</button>
    </form>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="isLoading" class="loading-message">데이터를 가져오는 중입니다.</p>

    <div v-else class="item-list">
      <article v-for="item in items" :key="item.id" class="item-card">
        <div class="item-content">
          <small>ID: {{ item.id }}</small>
          <p>{{ item.title }}</p>
        </div>

        <div class="item-actions">
          <button class="update-button" @click="handleUpdate(item)">PUT (수정)</button>
          <button class="delete-button" @click="handleDelete(item.id)">DEL (삭제)</button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.axios-crud {
  width: 100%;
  padding: 24px;
  color: #2f4054;
  background-color: white;
  border: 1px solid #e0e5ea;
  border-radius: 8px;
}

.axios-crud h2 {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 3px solid #edf0f2;
  font-size: 24px;
}

.create-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-bottom: 24px;
}

.create-form input {
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid #cfd8e3;
  border-radius: 6px;
  font-size: 15px;
}

.create-form button,
.item-actions button {
  padding: 11px 17px;
  color: white;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.create-form button {
  background-color: #20c965;
}

.create-form button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.item-list {
  display: grid;
  gap: 12px;
}

.item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px;
  background-color: #f7f9fb;
  border: 1px solid #dce3ea;
  border-radius: 7px;
}

.item-content {
  min-width: 0;
}

.item-content small {
  font-weight: bold;
}

.item-content p {
  margin-top: 10px;
  text-transform: capitalize;
}

.item-actions {
  display: flex;
  flex-shrink: 0;
  gap: 6px;
}

.update-button {
  background-color: #f4b600;
}

.delete-button {
  background-color: #ff4148;
}

.error-message {
  margin-bottom: 12px;
  color: #d63031;
}

.loading-message {
  padding: 20px;
  text-align: center;
}

@media (max-width: 650px) {
  .create-form {
    grid-template-columns: 1fr;
  }

  .item-card {
    align-items: stretch;
    flex-direction: column;
  }

  .item-actions button {
    flex: 1;
  }
}
</style>
