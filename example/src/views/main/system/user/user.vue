<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    />
    <PageModal
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
      @afterCreateData="handleResetClick"
      @afterdeleteData="handleResetClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import usePageSearch from '@/hook/use-page-search'
import usePageModal from '@/hook/use-page-modal'

import { formConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { getPageListData } from '@/service/main/main'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

    // 動態添加部門角色列表
    const departmentList = ref<any[]>([])
    const roleList = ref<any[]>([])
    const modalConfigRef = ref(modalConfig)

    watch(
      () => departmentList.value,
      () => {
        const departmentItem = modalConfigRef.value.formItems.find((item) => {
          return item.field === 'departmentId'
        })
        if (departmentItem) {
          departmentItem.options = departmentList.value.map((item) => {
            return { label: item.name, value: item.id }
          })
        }
      }
    )
    watch(
      () => roleList.value,
      () => {
        const roleItem = modalConfigRef.value.formItems.find((item) => {
          return item.field === 'roleId'
        })
        if (roleItem) {
          roleItem.options = roleList.value.map((item) => {
            return { label: item.name, value: item.id }
          })
        }
      }
    )

    // 編輯與新增按鈕點擊回調 編輯按鈕去除密碼欄位
    const getInitData = async () => {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      departmentList.value = departmentResult.data.list
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      roleList.value = roleResult.data.list
    }
    const newCallback = () => {
      const passwordItem = modalConfigRef.value.formItems.find((item) => item.field === 'password')
      if (passwordItem) passwordItem.isHidden = false
      getInitData()
    }
    const editCallback = () => {
      const passwordItem = modalConfigRef.value.formItems.find((item) => item.field === 'password')
      if (passwordItem) passwordItem.isHidden = true
      getInitData()
    }
    const { pageModalRef, handleNewData, handleEditData, defaultInfo } = usePageModal(
      newCallback,
      editCallback
    )

    return {
      formConfig,
      contentConfig,
      modalConfigRef,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
