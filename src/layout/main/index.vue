<template>
  <!-- 路由组件出口位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由的子路由 -->
      <div v-if="flag">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'
import { watch, ref, nextTick } from 'vue'

let layOutSettingStore = useLayOutSettingStore()
// 控制当前组件是否销毁重建
let flag = ref(true)

// 监听refsh的变化
watch(
  () => layOutSettingStore.refsh,
  () => {
    // nextTick——当响应式对象发生变化之后，可以获取到更新后的DOM
    flag.value = false // 点击按钮销毁
    nextTick(() => {
      // 这里是销毁了的DOM
      flag.value = true // 然后又创建，此时DOM刷新了
    })
  },
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
