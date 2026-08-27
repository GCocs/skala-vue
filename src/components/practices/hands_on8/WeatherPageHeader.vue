<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'
import UnitToggler from './UnitToggler.vue'

const route = useRoute()

const activeMenu = computed(() => {
  if (route.path.endsWith('/about')) return '/hands-on/8/about'
  if (route.path.endsWith('/guide')) return '/hands-on/8/guide'
  return '/hands-on/8'
})
</script>

<template>
  <header class="weather-page-header">
    <h1>🌤️ 종합실습 8: Element Plus 적용</h1>

    <nav class="weather-navigation">
      <el-menu :default-active="activeMenu" mode="horizontal" router :ellipsis="false">
        <el-menu-item index="/hands-on/8">🌦️ 날씨 대시보드</el-menu-item>
        <el-menu-item index="/hands-on/8/about">ℹ️ 서비스 소개</el-menu-item>
        <el-menu-item index="/hands-on/8/guide">📖 API 안내</el-menu-item>
      </el-menu>

      <UnitToggler />
    </nav>
  </header>
</template>

<style scoped>
.weather-page-header {
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
}

.weather-page-header h1 {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 25px;
}

.weather-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 14px;
  margin-top: 20px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
}

.weather-navigation :deep(.el-menu) {
  flex: 1;
  min-width: 0;
  border-bottom: 0;
}

@media (max-width: 520px) {
  .weather-navigation {
    align-items: stretch;
    flex-direction: column;
    padding: 0 12px 12px;
  }

  .weather-navigation :deep(.el-menu) {
    flex-direction: column;
  }

  .weather-navigation :deep(.el-menu-item) {
    justify-content: flex-start;
    height: 44px;
  }
}
</style>
