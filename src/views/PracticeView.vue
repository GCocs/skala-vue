<template>
  <section class="practice-menu">
    <h1>Practice</h1>
    <p>Vue 연습 내용을 주제별로 나눈었습니다.</p>

    <div class="practice-links">
      <RouterLink to="/practice/sample">
        <strong>1. Sample</strong>
        <span>Vue 컴포넌트 기본</span>
      </RouterLink>

      <RouterLink to="/practice/directive">
        <strong>2. Vue Directive</strong>
        <span>v-text, v-bind, v-if, v-for 등</span>
      </RouterLink>

      <RouterLink to="/practice/event">
        <strong>3. Event Handling</strong>
        <span>v-on과 이벤트 수식어</span>
      </RouterLink>

      <RouterLink to="/practice/form">
        <strong>4. Form Data Binding</strong>
        <span>v-model과 form 요소</span>
      </RouterLink>

      <RouterLink to="/practice/style">
        <strong>5. Vue Style</strong>
        <span>scoped 스타일 연습</span>
      </RouterLink>

      <RouterLink to="/practice/reactive-state">
        <strong>6. Reactive State</strong>
        <span>ref와 reactive 반응형 상태</span>
      </RouterLink>

      <RouterLink to="/practice/computed-watchers">
        <strong>7. Computed & Watchers</strong>
        <span>computed, watch와 여러 감시 방법</span>
      </RouterLink>

      <RouterLink to="/practice/component-lifecycle">
        <strong>8. Component Lifecycle</strong>
        <span>마운트, 업데이트, 언마운트 훅</span>
      </RouterLink>

      <RouterLink to="/practice/props-emits">
        <strong>9. Props & Emits</strong>
        <span>부모와 자식 컴포넌트 간 데이터 전달</span>
      </RouterLink>

      <RouterLink to="/practice/component-slot">
        <strong>10. Component Slot</strong>
        <span>기본, 이름이 있는 슬롯과 범위 슬롯</span>
      </RouterLink>

      <RouterLink to="/practice/pinia-basic">
        <strong>11. Pinia Basic</strong>
        <span>store의 state, getters와 actions</span>
      </RouterLink>

      <RouterLink to="/practice/axios">
        <strong>12. Axios</strong>
        <span>날씨 API 통신과 JSON CRUD</span>
      </RouterLink>

      <RouterLink to="/practice/element-plus">
        <strong>13. Element Plus</strong>
        <span>폼, 수량·별점, 메시지와 진행률</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.practice-menu h1 {
  margin-bottom: 5px;
  font-size: 32px;
  font-weight: bold;
}

.practice-menu > p {
  margin-bottom: 25px;
  color: #777;
}

.practice-links {
  display: grid;
  gap: 12px;
}

.practice-links a {
  display: flex;
  justify-content: space-between;
  padding: 18px;
  color: #2c3e50;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 7px;
}

.practice-links a:hover {
  border-color: #42b883;
}

.practice-links strong {
  font-weight: bold;
}

.practice-links span {
  color: #777;
}

@media (max-width: 600px) {
  .practice-links a {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
