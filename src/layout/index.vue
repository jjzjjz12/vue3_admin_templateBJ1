<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ flod: LayOutSettingStore.flod }">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="LayOutSettingStore.flod"
          background-color="$base-menu-background"
          active-text-color="#064ea1"
          :default-active="$route.path"
          text-color="white"
        >
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ flod: LayOutSettingStore.flod }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示 -->
    <div class="layout_main" :class="{ flod: LayOutSettingStore.flod }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
// 获取路由对象
import { useRoute } from 'vue-router'
// 右侧内容展示
import Main from './main/index.vue'
// 获取用户相关小仓库
import useUserStore from '@/store/modules/user'
// 获取layout设置相关仓库
import useLayOutSettingStore from '@/store/modules/setting'

let userStore = useUserStore()

let LayOutSettingStore = useLayOutSettingStore()
// 拿到当前路由，default-active刷新后活动当前路由菜单高亮
let $route = useRoute()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.flod {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0%;
    left: $base-menu-width;
    transition: all 0.3s;

    &.flod {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: #f7df81;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    transition: all 0.3s;

    &.flod {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
