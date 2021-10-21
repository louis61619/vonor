<template>
  <div class="department">
    <PageSearch :formConfig="searchFormConfig" />
    <PageContent
      pageName="department"
      ref="pageContentRef"
      :contentConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="department"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import usePageSearch from '@/hook/use-page-search'
import usePageModal from '@/hook/use-page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

    // modal配置信息
    // const store = useStore()
    // const modalConfigRef = computed(() => {
    //   const parentIdItem = modalConfig.formItems?.find(
    //     (item) => item.field === 'parentId'
    //   )
    //   if (!parentIdItem) return
    //   parentIdItem.options = store.state.entireDepartments.map((item) => {
    //     return { label: item.name, value: item.id }
    //   })
    //   return modalConfig
    // })
    // const editCallback = () => {}

    const { pageModalRef, handleNewData, handleEditData, defaultInfo } = usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
