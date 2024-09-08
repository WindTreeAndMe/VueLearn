<script setup>

// 这是关于stores，也就是pinia的使用方法的一个示例
import  {useCounterStore}  from "../stores/counter"
const counter = useCounterStore();
</script>
 
<template>
<div @click = "counter.increment()">我是首页,目前计数为{{ counter.count }}</div>
<router-link :to="{ name: '占位符' }">占位符</router-link>
<br/>
<router-link :to="{ name: '关于' }">关于</router-link>

<foo/>
</template>