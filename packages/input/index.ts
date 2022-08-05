// filename: packages/slider/index.ts
import TestIpt from './index.vue'

TestIpt.install = function (Vue: any) {
  Vue.component(TestIpt.name, TestIpt)
}
export default TestIpt