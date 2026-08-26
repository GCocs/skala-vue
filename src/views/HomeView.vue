<template>
  <section class="home">
    <h1>Vue 학습 페이지</h1>
    <p>보고 싶은 메뉴를 선택하세요.</p>

    <div class="menu-list">
      <RouterLink class="menu-card" to="/practice">
        <h2>Practice</h2>
        <p>Vue 문법을 주제별로 연습한 내용입니다.</p>
      </RouterLink>

      <RouterLink class="menu-card" to="/hands-on">
        <h2>Hands-on</h2>
        <p>PDF 과제로 완성한 실습 목록입니다.</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 40px 0;
  text-align: center;
}

.home h1 {
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: bold;
}

.home > p {
  margin-bottom: 30px;
  color: #777;
}

.menu-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

.menu-card {
  padding: 30px 20px;
  color: #2c3e50;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: left;
}

.menu-card:hover {
  border-color: #42b883;
}

.menu-card h2 {
  margin-bottom: 8px;
  color: #42b883;
  font-weight: bold;
}

@media (max-width: 600px) {
  .menu-list {
    grid-template-columns: 1fr;
  }
}
</style>
