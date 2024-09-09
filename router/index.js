import  { router } from '../modules/router'

router.beforeEach(v => {
    console.log('路由守卫', v)
})

router.beforeEach((to, from, next) => {
    // 假设我们有一个简单的认证逻辑
    const isAuthenticated = false; // 例如，通过某种方式检测用户是否已认证
  
    if (to.name !== 'Login' && !isAuthenticated) {
      // 如果用户没有认证且目标路由不是“登录”页面，则跳转到“登录”页面
      next({ name: 'Login' });
    } else {
      // 否则，允许跳转
      next();
    }
  });