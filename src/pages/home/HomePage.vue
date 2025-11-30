<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { formatDate } from '../../utils/formatDate.js'

const authStore = useAuthStore()

const userEmail = computed(() => authStore.user?.email || 'Не указан')

const registrationDate = computed(() => {
  const date = formatDate(authStore.user?.created_at)
  return date || 'Не указана'
})
const lastSignIn = computed(() => {
  const date = formatDate(authStore.user?.last_sign_in_at)
  return date || 'Не указан'
})
const sessionToken = computed(() => authStore.session?.access_token || 'Токен отсутствует')

async function handleLogout() {
  await authStore.signOut()
}
</script>

<template>
  <div class="home-page">
    <div class="home-content">
      <h1>Вы успешно вошли</h1>

      <div class="user-info">
        <div class="info-item">
          <span class="info-label">Email:</span>
          <span class="info-value">{{ userEmail }}</span>
        </div>

        <div class="info-item">
          <span class="info-label">Дата регистрации:</span>
          <span class="info-value">{{ registrationDate }}</span>
        </div>

        <div class="info-item">
          <span class="info-label">Последний вход:</span>
          <span class="info-value">{{ lastSignIn }}</span>
        </div>

        <div class="info-item">
          <span class="info-label">Токен сессии:</span>
          <span class="info-value token">{{ sessionToken }}</span>
        </div>
      </div>

      <button @click="handleLogout" class="btn btn-secondary" :disabled="authStore.loading">
        {{ authStore.loading ? 'Выход...' : 'Выход' }}
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
  width: 100%;
  max-width: 600px;
  text-align: center;
  background: var(--card-bg);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

h1 {
  margin: 0 0 var(--spacing-xl) 0;
  font-size: 2rem;
  color: var(--text-color);
}

.user-info {
  margin-bottom: var(--spacing-xl);
  text-align: left;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-label {
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: 0.875rem;
}

.info-value {
  color: var(--text-color);
  font-size: 1rem;
  word-break: break-all;
}

.info-value.token {
  font-family: monospace;
  font-size: 0.875rem;
  background: var(--surface-bg);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
