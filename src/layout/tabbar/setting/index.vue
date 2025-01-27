<template>
  <div class="tabbar_right">
    <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
    <el-button type="primary" size="small" icon="FullScreen" circle @click=""></el-button>
    <el-button type="primary" size="small" icon="Setting" circle @click=""></el-button>
    <img src="../../../public/logo.jpg" style="width: 24px; height: 24px; margin: 0px 10px" />
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
// 获取骨架小仓库
import useLayOutSettingStore from '@/store/modules/setting';

let layOutSettingStore = useLayOutSettingStore()

function updateRefsh() {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}
</script>

<style scoped>
.tabbar_right {
  display: flex;
  align-items: center;
}
</style>
