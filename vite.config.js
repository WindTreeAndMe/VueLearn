import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {
    ElementPlusResolver,
    NaiveUiResolver,
} from 'unplugin-vue-components/resolvers'
import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'

// esmodule 模式 的方法
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        // 别名配置，可以自定义路径别名
        alias: {
            '~/': `${resolve(__dirname, 'src')}/`
        }
    },

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
    plugins: [
        // Vue插件
        Vue(),

        // dirResolver,DirResolverHelper插件
        DirResolverHelper(),

        // 自动导入
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            // 自动导入的自己的组件
            resolvers: [ElementPlusResolver(), dirResolver(),
            dirResolver({
                target:'stores',
            })
            ],
        }),

        // 组件自动注册
        Components({
            resolvers: [ElementPlusResolver(), NaiveUiResolver(),],
        }),


    ],


})