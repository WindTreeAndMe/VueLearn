// define the routes
//import routes from  '~pages';
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes);

//console.log('启动router.js路由')

export const router = createRouter({
// 导入自动插入的路由配置后，就可以注释到这些
//   routes: [{
//         name: '首页',
//         component: () => import('../views/home.vue')
//   },
//   {
//     name: '关于',
//     path: '/about',
//     component: () => import('../views/about.vue')
//   }
//   ,
//   {
//     name: '占位符',
//     path: '/foo',
//     component: () => import('../views/home_foo.vue')
//   }
// ],
  routes,
  history: createWebHistory()
})

export default router