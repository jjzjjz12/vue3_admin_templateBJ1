<template>
  <div class="tabbar">
    <!-- 顶部左侧面包屑 -->
    <Breadcrumb />
    <Setting />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(219, 248, 248),
    rgb(136, 241, 244),
    rgb(219, 250, 248)
  );
}
</style>
