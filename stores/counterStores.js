import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({    
//     count: 0,
//   }),
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     },
//     reset() {
//       this.count = 0
//     },
//   },
// })

// 默认导出方式
export default defineStore('counter', {
  state: () => ({    
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
  },
})


