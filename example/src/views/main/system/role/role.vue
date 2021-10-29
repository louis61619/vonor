<template>
  <div>
    <PageSearch
      :formConfig="formConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="role"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    />
    <PageModal
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      @afterCreateData="handleResetClick"
      @afterdeleteData="handleResetClick"
    >
      <div class="tree">
        <el-tree
          ref="elTreeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { mapMenuToLeafKeys } from '@/utils/map-meuns'

import { ElTree } from 'element-plus'

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
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

    const menuList = ref([])
    const otherInfo = ref({})
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const getInitList = async () => {
      const result = await getPageListData('menu/list', {})
      const { list } = result.data
      menuList.value = list
    }

    const editcallback = (item: any) => {
      const leafKeys = mapMenuToLeafKeys(item.menuList)
      getInitList().then(() => {
        nextTick(() => {
          elTreeRef.value?.setCheckedKeys(leafKeys, false)
        })
      })
    }

    const { pageModalRef, handleNewData, handleEditData, defaultInfo } = usePageModal(
      getInitList,
      editcallback
    )

    const handleCheckChange = (data: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      formConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo,
      menuList,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped>
.tree {
  margin-left: 25px;
}
</style>
