<script setup>
    import { useCounterStore } from "../stores/counter";
    const counter = useCounterStore();
</script>

<template>
    <div>我是关于页</div>
    <div @click="counter.increment()">我是关于页,目前计数为{{ counter.count }}</div>
    <router-link :to="{ name: '首页' }">首页</router-link>
    <br />
</template>