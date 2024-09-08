<script setup>
import  {useCounterStore}  from "../stores/counter"
const counter = useCounterStore();
// 导入foo组件，但是如果组件太多了，可以考虑使用插件
// "unplugin-vue-components"，该插件可以自动导入组件，所以以下导入行可以注释掉
// 但是呢，如果组件太多，那么导入组件的过程会很慢，所以还是建议手动导入组件！！！
//import foo from "../components/foo.vue";
</script>

<template>
<!-- 导入foo组件显示 -->
<div>我是占位符页</div>
<foo/>
<div @click = "counter.increment()">我是占位符页,目前计数为{{ counter.count }}</div>
<router-link :to="{ name: '首页' }">首页</router-link>
</template>