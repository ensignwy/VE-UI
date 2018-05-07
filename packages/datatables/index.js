import Datatables from './src/Datatables'

Datatables.install = function (Vue) {
  Vue.component(Datatables.name, Datatables)
}

export default Datatables
