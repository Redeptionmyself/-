<template>
  <div class="growth-page">
    <n-card title="生长数据">
      <n-space vertical>
        <n-alert type="info">
          欢迎使用生长数据管理模块
        </n-alert>
        <!-- 添加更多内容 -->
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NSpace, NAlert } from 'naive-ui'
</script>

<style scoped>
.growth-page {
  padding: 16px;
}
</style> 