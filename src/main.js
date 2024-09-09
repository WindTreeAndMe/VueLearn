import { createApp } from 'vue';
import App from './APP.vue';
import router from '../modules/router';
import pinia from '../modules/pinia';
import '../router';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');

console.log('项目启动或装载了 package.json 中 "main": "main.js" 模块成功');