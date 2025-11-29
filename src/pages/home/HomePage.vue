<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const loading = computed(() => authStore.loading)

async function handleLogout() {
  await authStore.signOut()
}
</script>

<template>
  <div class="home-page">
    <div class="home-content">
      <h1>Вы успешно вошли</h1>
      <button @click="handleLogout" class="btn btn-secondary" :disabled="loading">
        {{ loading ? 'Выход...' : 'Выход' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--spacing-md);
}

.home-content {
  text-align: center;
  background: var(--card-bg);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

h1 {
  margin: 0 0 var(--spacing-lg) 0;
  font-size: 2rem;
  color: var(--text-color);
}
</style>
