// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
console.log(ElementPlusIconsVue)

const allGloablComponent = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGloablComponent).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGloablComponent[item])
    })
    // 将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
