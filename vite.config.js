import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({

    // 开发服务器配置
    server: {
        port: 5000, // 端口号
        open: true, // 自动打开浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // 代理目标
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },

    // 插件配置
    plugins: [Vue()]
})