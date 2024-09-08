import { createRouter, createWebHistory } from 'vue-router'

console.log('启动router.js路由')

const router = createRouter({
  routes: [{
        name: '首页',
        component: () => import('../views/home.vue')
  },
  {
    name: '关于',
    path: '/about',
    component: () => import('../views/about.vue')
  }
  ,
  {
    name: '占位符',
    path: '/foo',
    component: () => import('../views/home_foo.vue')
  }

  
],
  history: createWebHistory()
})

export default router