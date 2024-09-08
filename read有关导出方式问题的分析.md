# 关于导入导出部分的笔记

## 第一种方式，通过export default 
```javascript
import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;    // 导出pinia实例
```
这里我们导出了一个pinia实例，供其他组件使用，但是我们还没有在其他组件中使用到它，所以我们还需要在其他组件中导入它。

```javascript
import pinia from '../modules/pinia';
```

这种方式不使用import {pinia} from '../modules/pinia';而是直接导入

## 第二种方式，通过

第一种示例
```javascript
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({    
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})

export default useCounterStore
```
第一种导入方式
```javascript
import foo from "../components/foo.vue";
import  useCounterStore  from "../stores/counter"

const counter = useCounterStore();
</script>
 
<template>
<div @click = "counter.increment()">我是首页,目前计数为{{ counter.count }}</div>
<foo/>
</template>
```


**修改为第二种**
```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({    
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})
```

**第二种导入方式**
```javascript
import foo from "../components/foo.vue";
import  {useCounterStore}  from "../stores/counter"

const counter = useCounterStore();
</script>
 
<template>
<div @click = "counter.increment()">我是首页,目前计数为{{ counter.count }}</div>
<foo/>
</template>
```

# **总结**
**两种方式的区别在于，第一种方式使用export default进行导出，第二种方式使用export const进行导出。**

1. 如果使用默认default进行导出，则需要在其他组件中导入时使用import pinia from '../modules/pinia';

2. 如果使用export const进行导出，则需要在其他组件中导入时使用import {useCounterStore}  from '../stores/counter';