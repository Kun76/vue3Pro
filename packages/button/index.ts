// filename: packages/slider/index.ts
import TestBtn from './index.vue'

TestBtn.install = function (Vue: any) {
  Vue.component(TestBtn.name, TestBtn)
}
export default TestBtn