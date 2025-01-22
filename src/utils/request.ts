// 进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 1.利用axios.create()创建axios实例，本质上与上面import的axios是一样的，只是可以有其他配置
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})
// 2.添加请求与响应拦截器
request.interceptors.request.use((config) => {
  return config
})
// 3.响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败回调：处理http网络错误
    // 定义变量存储网络错误信息
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
// 4.对外暴露
export default request
