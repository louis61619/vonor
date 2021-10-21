<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.url" :to="{ path: '#' }">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: Array as PropType<IBreadcrumb[]>
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.breadcrumb {
  margin-left: 16px;
}
</style>
