<template>
  <div class="logo">
    <img :src="setting.logo" v-if="setting.logoHidden" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
    white-space: nowrap
  }
}
</style>
