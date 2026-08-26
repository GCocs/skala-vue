<template>
  <div class="app">
    <header class="app-header">
      <RouterLink class="logo" to="/">SKALA Vue</RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/practice">Practice</RouterLink>
        <RouterLink to="/hands-on">Hands-on</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

.logo {
  color: #2c3e50;
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  padding: 6px 10px;
}

nav a.router-link-active {
  color: white;
  background-color: #42b883;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .app-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
