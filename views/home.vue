<script setup>

// ref数据跳转页面就消失了
// 如果导入外面该插件，则可以直接使用ref "unplugin-auto-import"
// import { ref } from 'vue'
const num = ref(100)
const inc =() => {
  num.value++;
  counter.count = num;
}

import useFoo from "../composables/useFoo";

// 这是关于stores，也就是pinia的使用方法的一个示例
// 如果导入自己目录的文件模块，则需要使用import相对路径导入，而不能使用"unplugin-auto-import"
// 如果在target中指定该目录为自动导入，那么，也可以注释掉，但是需要注意的是
// 该目录下的文件模块，必须要有默认导出，否则会报错 使用default导出
// import  {useCounterStore}  from "../stores/counter"
// const counter = useCounterStore();

// 而且，函数名称counterStores 与stores中的js文件名对应才行
const counter = counterStores();

// 如果使用 import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'
// 那么可以不需要下面这行代码，因为它会自动导入所有自己文件模块（前提是在默认composables文件夹中或者target指定），但是vue可能会警告
import Foo from "../components/Foo.vue";
import counterStores from "../stores/counterStores";
console.log(useFoo);

</script>
 
<template>
<div @click = "counter.increment()">我是首页,目前计数为{{ counter.count }}</div>
<router-link :to="{ name: '占位符' }">占位符</router-link>
<br/>
<router-link :to="{ name: '关于' }">关于</router-link>

<!-- element-plus的使用示例 -->
<br/>
<el-button @click="inc">我是一个el按钮</el-button>
<br/>
<n-button @click="inc">我是一个n按钮</n-button>
<br/>
<foo/>
</template>