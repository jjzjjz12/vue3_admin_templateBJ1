// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoute } from '@/router/routes'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoute, // 仓库存储生成菜单需要的数组（路由）
      username: '',
      avatar: ''
    }
  },
  // 异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      // 请求成功：200->token
      if (result.code === 200) {
        // 通过pinia仓库存储token
        this.token = result.data.token as string
        // 本地存储持久化存储一份
        SET_TOKEN(result.data.message as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
      // 请求失败：201->失败信息
    },
    // 获取用户信息的方法
    async userInfo() {
      // 获取用户信息进行存储仓库当中【用户头像、名字】
      let result = await reqUserInfo();
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      } else {

      }
    }
  },
  getters: {},
})
// 对外暴露获取小仓库的方法
export default useUserStore
