<script setup>
import { ref } from 'vue'

const linkMessage = ref('링크를 눌러 기본 동작을 막아보세요.')
const status = ref('아직 반응이 없습니다.')
const clickCount = ref(0)

const handleLink = () => {
  clickCount.value += 1
  linkMessage.value = `방지된 클릭 수: ${clickCount.value}`
}

const handleBox = () => {
  status.value = '부모 영역이 클릭되어 버블링 이벤트가 발생했습니다.'
}

const handleChild1 = () => {
  clickCount.value += 1
  status.value = `버블링 반응 버튼 클릭: ${clickCount.value}`
}

const handleChild2 = () => {
  clickCount.value += 1
  status.value = `stop 적용 버튼 클릭: ${clickCount.value} (부모 반응은 막힘)`
}
</script>

<template>
  <div class="practice-section">
    <h2>이벤트 수식어(Modifier) 학습</h2>

    <h3>1) .prevent (기본 동작 막기)</h3>
    <a href="https://www.naver.com" @click.prevent="handleLink">네이버 링크</a>
    <p>{{ linkMessage }}</p>

    <h3>2) .stop (이벤트 버블링 막기)</h3>
    <div @click="handleBox" style="padding: 20px; background-color: #eee; border-radius: 8px">
      <p>부모 영역을 클릭하면 부모 이벤트도 동작합니다.</p>
      <button @click.stop="handleChild1">버블링 반응 버튼</button>
      <button @click.stop="handleChild2" style="margin-left: 8px">stop 적용 버튼</button>
    </div>
    <p>{{ status }}</p>
  </div>
</template>