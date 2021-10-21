<template>
  <div class="login-panel">
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>帳號登錄</span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手機登錄</span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" @change="keepChange">記住密碼</el-checkbox>
      <el-link type="primary">忘記密碼</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"> 立即登錄 </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(!!localCache.getCache('name') ?? false)

    // 獲取組件類型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      }
    }

    const keepChange = (value: boolean) => {
      if (!value) {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
    }

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      keepChange,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
