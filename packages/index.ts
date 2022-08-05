
import TestBtn from './button'
import TestIpt from './input'

const components = [TestBtn,TestIpt]

const install = function (Vue: any) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ... components,
}