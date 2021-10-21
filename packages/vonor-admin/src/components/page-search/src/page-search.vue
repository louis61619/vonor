<template>
  <BaseForm v-bind="formConfig" v-model="formData" class="page-search">
    <template #header>
      <h2>高級檢索</h2>
    </template>
    <template #footer>
      <div class="footer">
        <el-button icon="el-icon-search" @click="handleResetClick"> 重置 </el-button>
        <el-button type="primary" icon="el-icon-refresh" @click="handleSearchClick"
          >搜索
        </el-button>
      </div>
    </template>
  </BaseForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseForm from '@/base-ui/form'

export default defineComponent({
  components: {
    BaseForm
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const originFormData: any = {}
    const formItems = props.formConfig?.formItems || []
    for (const item of formItems) {
      originFormData[`${item.field}`] = ''
    }

    const formData = ref(originFormData)

    // 用戶點擊重置
    const handleResetClick = () => {
      // 1.直接修改內部指針
      // for (const key in originFormData) {
      //   formData.value[key] = originFormData[key]
      // }
      formData.value = originFormData
      emit('resetBtnClick')
    }

    const handleSearchClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style lang="less" scoped>
.page-search {
  padding: 22px 0;
  .footer {
    text-align: right;
    padding-right: 45px;
    // padding: 0 45px 20px 0;
  }
}
</style>
