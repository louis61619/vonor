<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse" :userMenus="userMenus" :defaultValue="defaultValue" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader
            :breadcrumbs="breadcrumb"
            :collapse="isCollapse"
            @foldChange="handleFoldChange"
          />
        </el-header>
        <el-main class="page-content" ref="mainRef">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

import { pathMapToMenu } from '@/utils/map-meuns'
import emmiter from '@/utils/event-bus'
import { ElMain } from 'element-plus'

import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)

    const route = useRoute()
    const store = useStore()
    const defaultValue = ref()
    const breadcrumb = ref<IBreadcrumb[]>([])
    const mainRef = ref<InstanceType<typeof ElMain>>()

    const userMenus = computed(() => {
      return store.state.login.userMenus
    })

    watchEffect(() => {
      const currentPath = route.path
      if (currentPath === '/login') return
      if (currentPath && userMenus.value) {
        if (mainRef.value) {
          mainRef.value.$el.scrollTop = 0
        }
        const { menu, breadcrumbs } = pathMapToMenu(userMenus.value, currentPath)
        if (menu && breadcrumbs) {
          defaultValue.value = menu.id + ''
          breadcrumb.value = breadcrumbs
        }
      }
    })

    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold

      let timer: any
      let count = 0
      timer = setInterval(() => {
        count++
        emmiter.emit('handleFoldChange')
        if (count > 7) {
          clearInterval(timer)
        }
      }, 100)
    }

    return {
      isCollapse,
      handleFoldChange,
      defaultValue,
      userMenus,
      breadcrumb,
      mainRef
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
    // padding-top: 22px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
