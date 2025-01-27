<template>
  <div class="tabbar_right">
    <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
    <el-button type="primary" size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button type="primary" size="small" icon="Setting" circle @click=""></el-button>
    <img :src="userStore.avatar" style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%;" />
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userStore.username }}
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
import useLayOutSettingStore from '@/store/modules/setting'
// 获取用户小仓库
import useUserStore from '@/store/modules/user';
let userStore = useUserStore()


let layOutSettingStore = useLayOutSettingStore()

// 刷新按钮
function updateRefsh() {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}

// 全屏按钮
function fullScreen() {
  // 检查当前是否已经处于全屏模式
  let full = document.fullscreenElement;
  if (!full) {
    // 获取要进入全屏模式的元素，这里使用整个文档的根元素
    const element = document.documentElement;

    // 调用 requestFullscreen 方法进入全屏模式
    element.requestFullscreen().catch(err => {
      console.error("Failed to enter fullscreen:", err);
    });
  } else {
    // 如果已经处于全屏模式，退出全屏
    document.exitFullscreen().catch(err => {
      console.error("Failed to exit fullscreen:", err);
    });
  }
}

</script>

<style scoped>
.tabbar_right {
  display: flex;
  align-items: center;
}
</style>
