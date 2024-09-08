<script setup>
import foo from "../components/foo.vue";
import  {useCounterStore}  from "../stores/counter"

const counter = useCounterStore();
</script>
 
<template>
<div @click = "counter.increment()">我是首页,目前计数为{{ counter.count }}</div>
<foo/>
</template>