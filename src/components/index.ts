// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGloablComponent = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGloablComponent).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGloablComponent[item])
    })
  },
}
