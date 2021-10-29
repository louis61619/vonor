<template>
  <div class="page-modal">
    <el-dialog title="新建用戶" v-model="dialogVisible" center destroy-on-close>
      <BaseForm v-bind="modalConfig" v-model="formData">
        <template v-for="item in otherSlotProps" :key="item.prop" #[item.slotName]="scope">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </BaseForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleConfirmClick">確定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import { IForm } from '@/base-ui/form/types'
import BaseForm from '@/base-ui/form'

import { createPageData, updatePageData } from '@/service/main/main'

export default defineComponent({
  components: {
    BaseForm
  },
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['afterCreateData', 'afterdeleteData'],
  setup(props, { emit }) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (let item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 新增|編輯
    const handleCreateData = async () => {
      await createPageData(`/${props.pageName}`, {
        ...formData.value,
        ...props.otherInfo
      })
      emit('afterCreateData')
    }

    const handledeleteData = async () => {
      await updatePageData(`/${props.pageName}/${props.defaultInfo.id}`, {
        ...formData.value,
        ...props.otherInfo
      })
      emit('afterdeleteData')
    }

    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        handledeleteData()
      } else {
        handleCreateData()
      }
    }

    const otherSlotProps = props.modalConfig.formItems.filter((item: any) => {
      if (item.slotName) return true
    })

    return {
      dialogVisible,
      formData,
      handleConfirmClick,
      otherSlotProps
    }
  }
})
</script>

<style scoped>
.page-modal::v-deep .el-dialog {
  max-width: 500px;
  min-width: 350px;
}
</style>
