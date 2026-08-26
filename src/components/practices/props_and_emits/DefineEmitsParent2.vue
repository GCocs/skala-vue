<script setup>
import { ref } from 'vue'
import DefineEmitsChild2 from './DefineEmitsChild2.vue'

const selectedCity = ref('선택한 도시 없음')

const receiveCity = (cityName) => {
  selectedCity.value = `${cityName} 선택`
}
</script>

<template>
  <div class="practice-section">
    <h2>도시 선택 이벤트</h2>
    <DefineEmitsChild2 city-name="서울" status="맑음" @select-city="receiveCity" />
    <DefineEmitsChild2 city-name="대전" status="흐림" @select-city="receiveCity" />
    <DefineEmitsChild2 city-name="제주" status="비" @select-city="receiveCity" />
    <p>{{ selectedCity }}</p>
  </div>
</template>
