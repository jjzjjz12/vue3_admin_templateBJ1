// 小仓库：layout组件相关配置仓库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      flod: false, // 用户控制菜单折叠还是收起控制
      refsh: false, // 刷新效果
    }
  },
})

export default useLayOutSettingStore
