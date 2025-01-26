<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <el-menu background-color="$base-menu-background" text-color="white" active-text-color="#064ea1"
                    unique-opened="false">
                    <!-- 根据路由动态生成菜单 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">顶部导航</div>
        <!-- 内容展示 -->
        <div class="layout_main">
            <p style="height: 10000px;background-color: pink;">内容展示</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Logo from './logo/index.vue';
import Menu from './menu/index.vue'
// 获取用户相关小仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();



</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }


    }

    .layout_tabbar {
        position: fixed;
        background-color: #99f191;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0%;
        left: $base-menu-width;
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
    }
}
</style>