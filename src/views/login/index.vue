<template>
  <div>
    <div class="login_container">
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
          <el-form
            class="login_form"
            :model="loginForm"
            :rules="rules"
            ref="loginForms"
          >
            <h1>Hello</h1>
            <h2>欢迎来到硅谷甄选</h2>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                v-model="loginForm.password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="login_btn"
                type="primary"
                size="default"
                @click="login"
                :loading="loading"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
// 引入用户小仓库
import useUserStore from '@/store/modules/user'
// 获取路由器
import { useRouter } from 'vue-router'
// 消息弹框
import { ElNotification } from 'element-plus'
// 时间
import { getTime } from '@/utils/time'

let $router = useRouter()

let useStore = useUserStore()
let loginForm = reactive({ username: 'admin', password: '111111' })

let loading = ref(false)

// 获取el-form组件
let loginForms = ref()

async function login() {
  try {
    // 保证校验通过再发请求
    await loginForms.value.validate()
    // 加载效果开启
    loading.value = true
  } catch (error) {
    console.log('ddd')
  }

  // 通知仓库发送登录请求
  try {
    // 可以书写.then
    await useStore.userLogin(loginForm)
    // 编程式导航跳转到展示数据首页
    $router.push('/')
    // 登录成功的提示
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI!${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    // 加载效果消失
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const validateUserName = (rule: any, value: any, callback: any) => {
  // rule校验规则对象
  // value表单元素文本内容
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少6位'))
  }
}

const rules = reactive({
  username: [
    { trigger: 'change', validator: validateUserName },
    // {required:true,message:'用户名不能为空',trigger:'blur'},
    // { required:true,min: 5, max: 10, message: '账号长度6-10位', trigger: 'change' }
  ],
  password: [
    { validator: validatePass, trigger: 'blur' },
    // { required:true,min: 6, max: 15, message: '密码长度6-15', trigger: 'change' }
  ],
})
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
