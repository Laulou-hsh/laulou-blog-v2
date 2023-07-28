import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index/Index.vue'
import AuthorView from '../views/LandingPages/Author/AuthorView.vue'
import ArticlesTest from '../layouts/sections/articles/test/Test.vue'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {top: 0}
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/pages/landing-pages/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/sections/acticles/test',
      name: 'articles-test',
      component: ArticlesTest,
      props: (route) => ({id: route.query.id}),
    },
  ],
  scrollBehavior,
})

export default router
