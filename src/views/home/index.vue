<template>
  <div>
    <h1>一级路由——展示登录成功</h1>
  </div>
</template>

<script setup lang="ts">
// 引入组合式API函数之生命周期函数
import { onMounted } from 'vue';
// 获取仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore()
// 目前首页挂载完毕获取用户信息
onMounted(() => {
  userStore.userInfo()
})

onMounted
</script>

<style scoped></style>
