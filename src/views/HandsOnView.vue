<template>
  <section class="hands-on-menu">
    <h1>Hands-on</h1>
    <p>실습별로 바로 들어갈 수 있는 목록입니다.</p>

    <div class="hands-on-list">
      <RouterLink to="/hands-on/2">
        <strong>실습 2</strong>
        <span>Weather Mockup</span>
      </RouterLink>

      <RouterLink to="/hands-on/3">
        <strong>실습 3</strong>
        <span>Weather Composition</span>
      </RouterLink>

      <RouterLink to="/hands-on/4">
        <strong>실습 4</strong>
        <span>Weather Components</span>
      </RouterLink>

      <RouterLink to="/hands-on/5">
        <strong>실습 5</strong>
        <span>Weather Router</span>
      </RouterLink>

      <RouterLink to="/hands-on/6">
        <strong>실습 6</strong>
        <span>Weather Store</span>
      </RouterLink>

      <RouterLink to="/hands-on/7">
        <strong>실습 7</strong>
        <span>Weather Axios</span>
      </RouterLink>

      <RouterLink to="/hands-on/8">
        <strong>실습 8</strong>
        <span>Weather Element Plus</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hands-on-menu h1 {
  margin-bottom: 5px;
  font-size: 32px;
  font-weight: bold;
}

.hands-on-menu > p {
  margin-bottom: 25px;
  color: #777;
}

.hands-on-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}

.hands-on-list a {
  display: flex;
  flex-direction: column;
  padding: 25px;
  color: #2c3e50;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.hands-on-list a:hover {
  border-color: #42b883;
}

.hands-on-list strong {
  margin-bottom: 5px;
  color: #42b883;
  font-size: 20px;
  font-weight: bold;
}
</style>
