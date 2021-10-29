<template>
  <div class="content">
    <BaseTable v-bind="contentConfig" :list="datalist" :listCount="totalCount" v-model:page="page">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" size="medium" @click="handleNewClick">
          新建數據
        </el-button>
      </template>

      <!-- 列表中的插槽 -->
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? '啟用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filter.formateTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formateTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            修改
          </el-button>
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
          >
            刪除
          </el-button>
        </div>
      </template>

      <!-- 動態插入剩餘的插槽 -->
      <template v-for="item in otherSlotProps" :key="item.prop" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </BaseTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { getPageListData, deletePageData } from '@/service/main/main'
import { usePermission } from '@/hook/use-permission'

import BaseTable from '@/base-ui/table'

import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {
    BaseTable
  },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    showCreateButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const datalist = ref([])
    const totalCount = ref<number>(0)

    const page = ref({
      pageSize: 10,
      currentPage: 1
    })

    // 權限判斷
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')
    const isDelete = usePermission(props.pageName, 'delete')

    // 發送網路請求
    const getPageData = async (queryInfo = {}) => {
      if (!isQuery) return
      datalist.value = []
      const pageUrl = `/${props.pageName}/list`
      const pageResult = await getPageListData(pageUrl, {
        offset: (page.value.currentPage - 1) * page.value.pageSize,
        size: page.value.pageSize,
        ...queryInfo
      })
      if (pageResult?.data) {
        const { list, totalCount: count } = pageResult.data
        datalist.value = list
        totalCount.value = count
      } else {
        ElMessage.error('請求失敗')
      }
    }

    // 監聽頁面變化
    watchEffect(() => {
      if (page.value.currentPage || page.value.pageSize) {
        getPageData()
      }
    })

    // 獲取動態插槽
    const otherSlotProps = props.contentConfig?.propsList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      if (item.slotName) return true
    })

    // 新建|編輯|刪除
    const handleNewClick = (item: any) => {
      emit('newBtnClick', item)
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    const handleDeleteClick = async (item: any) => {
      const pageUrl = `${props.pageName}/${item.id}`
      await deletePageData(pageUrl)
      getPageData()
    }

    return {
      datalist,
      getPageData,
      page,
      totalCount,
      otherSlotProps,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleEditClick,
      handleDeleteClick,
      handleNewClick
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
