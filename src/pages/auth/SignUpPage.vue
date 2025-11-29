<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Регистрация</h1>
      <form @submit.prevent>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="your@email.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            minlength="6"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Подтвердите пароль</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            placeholder="••••••••"
            minlength="6"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
      <p class="auth-link">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
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
