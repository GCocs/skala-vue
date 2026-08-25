<script setup>
import { ref } from 'vue'

const textColor = ref('purple')
const boxWidth = ref(150)
const isWide = ref(false)
const status = ref('기본 테마입니다.')
const baseBoxStyle = ref({
  backgroundColor: '#42b883',
  height: '100px',
  transition: 'all 0.3s ease',
})

const toggleTheme = () => {
  textColor.value = textColor.value === 'purple' ? 'blue' : 'purple'
  isWide.value = !isWide.value
  status.value = isWide.value ? '확장된 테마로 바뀌었습니다.' : '기본 테마입니다.'
}
</script>

<template>
  <div class="practice-section">
    <h2>v-bind 디렉티브 고급 (스타일 바인딩)</h2>
    <h3>1) 인라인 스타일 변수 조작 (객체 형식)</h3>
    <p :style="{ color: textColor, fontWeight: 'bold' }">이 글자의 색상은 실시간으로 바뀝니다.</p>
    <button @click="toggleTheme">글자 색상 및 레이아웃 토글</button>
    <p>{{ status }}</p>
    <br />
    <h3>2) 다중 스타일 객체 조립 (배열 형식)</h3>
    <label>박스 가로 크기(px): </label>
    <input type="number" v-model="boxWidth" step="50" />
    <br />
    <div :style="[baseBoxStyle, { width: (isWide ? boxWidth + 100 : boxWidth) + 'px' }]">
      <p style="color: white; padding: 10px; text-align: center">
        가로 크기: {{ isWide ? boxWidth + 100 : boxWidth }}px 박스
      </p>
    </div>
  </div>
</template>
