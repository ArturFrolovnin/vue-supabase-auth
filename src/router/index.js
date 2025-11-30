import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/login',
      name: 'SignInPage',
      component: () => import('../pages/auth/SignInPage.vue'),
    },
  ],
})

export default router
