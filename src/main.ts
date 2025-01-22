import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'
// 安装自定义插件，传进去这个就会触发components下的index.ts里面的install方法
app.use(globalComponent)

import '@/styles/index.scss'

app.mount('#app')
