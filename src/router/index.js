import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/register',
      name: 'SignUpPage',
      component: () => import('../pages/auth/SignUpPage.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/login',
      name: 'SignInPage',
      component: () => import('../pages/auth/SignInPage.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../pages/home/HomePage.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.isInitialized) {
    await authStore.init()
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'SignInPage' })
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'HomePage' })
  } else {
    next()
  }
})

export default router
