<template>
  <div class="tabbar_left">
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 20px" @click="changeIcon">
      <component :is="LayOutSettingStore.flod ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="item.path"
        v-show="item.meta.title"
        :to="item.path"
      >
        <!-- 图标 -->
        <el-icon style="vertical-align: middle">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <!-- 面包屑匹配展示路由的标题 -->
        <span style="margin: 0px 5px">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
// 获取Layout配置相关仓库
import useLayOutSettingStore from '@/store/modules/setting'
// 获取路由器
import { useRoute } from 'vue-router'

let LayOutSettingStore = useLayOutSettingStore()
let $route = useRoute()

function changeIcon() {
  LayOutSettingStore.flod = !LayOutSettingStore.flod
}
</script>

<style scoped>
.tabbar_left {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
</style>
