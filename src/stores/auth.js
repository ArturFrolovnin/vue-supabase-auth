import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  async function init() {
  }

  async function signUp(email, password) {
  }

  async function signIn(email, password) {
  }

  async function signOut() {
  }

  return {
    user,
    session,
    loading,
    isAuthenticated,
    init,
    signUp,
    signIn,
    signOut,
  }
})
