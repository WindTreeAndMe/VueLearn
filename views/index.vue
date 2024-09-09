<script setup>
import { toRaw } from 'vue';
import { useRoute } from 'vue-router';
// custom block 方式
console.log(toRaw(useRoute()))

console.log(useRoute().meta.age)

// 导入组件，但是已经装了插件，可以省略
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <!-- 布局系统 常规布局方法-->
  <Header />
  index
  <Footer />
  <div>index.vue</div>
</template>


<!-- layout默认修改 -->
<route>
{
    meta:{
      layout: 'barr',
      age:18
      }
}
</route>