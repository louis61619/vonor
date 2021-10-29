<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 局部引入
// import { ElButton } from 'element-plus'
// 局部引入css
// import 'element-plus/lib/theme-chalk/el-button.css'

import { ElConfigProvider } from 'element-plus'

import zhTW from 'element-plus/lib/locale/lang/zh-tw'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  data() {
    return {
      locale: zhTW
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
