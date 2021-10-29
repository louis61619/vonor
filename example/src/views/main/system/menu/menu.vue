<template>
  <div class="user">
    <!-- <PageSearch
      :formConfig="formConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleQueryClick"
    /> -->
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="menu"
      :showCreateButton="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

// import { formConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    // PageSearch,
    PageContent
  },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()

    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }

    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    }

    return {
      // formConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
