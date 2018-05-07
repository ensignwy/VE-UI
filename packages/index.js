import VeScroller from './scroller/index.js'
import SidebarLayout from './sidebar-layout/index.js'
import DataTables from './datatables/index.js'
import VeSwiper from './swiper/index.js'
import VeSwitcher from './switcher/index.js'

const components = [
  VeScroller,
  SidebarLayout,
  DataTables,
  VeSwiper,
  VeSwitcher
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VeScroller,
  SidebarLayout,
  DataTables,
  VeSwitcher,
  VeSwiper
}
