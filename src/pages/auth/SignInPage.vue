<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const email = ref('')
const password = ref('2570WaDs!')
const error = ref('')

async function signIn() {
  error.value = ''

  const { error: signInError } = await authStore.signIn(email.value, password.value)

  if (signInError) {
    error.value = signInError.message || 'Ошибка входа'
  }
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Вход</h1>
      <form @submit.prevent="signIn()">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input id="password" v-model="password" type="password" required placeholder="••••••••" />
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <button type="submit" class="btn btn-primary" :disabled="authStore.loading">
          {{ authStore.loading ? 'Вход...' : 'Войти' }}
        </button>
      </form>
      <p class="auth-link">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--spacing-md);
}

.auth-card {
  width: 100%;
  max-width: 400px;
  padding: var(--spacing-xl);
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

.auth-card h1 {
  margin: 0 0 var(--spacing-lg) 0;
  text-align: center;
  font-size: 1.75rem;
}

.auth-link {
  margin-top: var(--spacing-lg);
  text-align: center;
  font-size: 0.875rem;
}
</style>
