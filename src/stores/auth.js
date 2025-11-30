import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../services/supabase/supabaseClient.js'
import router from '../router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const loading = ref(false)
  const isInitialized = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  async function init() {
    try {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession()
      session.value = currentSession
      user.value = currentSession?.user ?? null

      supabase.auth.onAuthStateChange((_event, newSession) => {
        session.value = newSession
        user.value = newSession?.user ?? null
      })
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
      isInitialized.value = true
    }
  }

  async function signUp(email, password) {
    try {
      loading.value = true
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      session.value = data.session
      user.value = data.user

      if (data.user) {
        router.push('/home')
      }

      return { data, error: null }
    } catch (error) {
      console.error('Error signing up:', error)
      return { data: null, error }
    } finally {
      loading.value = false
    }
  }

  async function signIn(email, password) {
    try {
      loading.value = true
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      session.value = data.session
      user.value = data.user

      router.push('/home')

      return { data, error: null }
    } catch (error) {
      console.error('Error signing in:', error)
      return { data: null, error }
    } finally {
      loading.value = false
    }
  }

  async function signOut() {
    try {
      loading.value = true
      const { error } = await supabase.auth.signOut()

      if (error) throw error

      session.value = null
      user.value = null

      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    session,
    loading,
    isAuthenticated,
    isInitialized,
    init,
    signUp,
    signIn,
    signOut,
  }
})
