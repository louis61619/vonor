<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="logout">
            退出登錄
          </el-dropdown-item>
          <!-- <el-dropdown-item divided>用戶信息</el-dropdown-item>
          <el-dropdown-item>系統管理</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)

    const logout = () => {
      localCache.deleteCache('token')
      router.push('/')
    }

    return {
      name,
      logout
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  min-width: 150px;

  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;

    & > span {
      margin-left: 8px;
    }
  }
}
</style>
