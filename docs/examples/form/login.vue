<template>
  <Form v-model="modelValue" v-bind="formConfig"></Form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Form, IForm } from '@vonor/ui'
// import moduleName from '@vonor/ui/'

export default defineComponent({
  components: {
    Form
  },
  setup() {
    const modelValue = ref({})

    const formConfig: IForm = {
      colLayout: {
        span: 24
      },
      formItems: [
        {
          field: 'email',
          label: 'E-mail',
          placeholder: '請輸入E-mail',
          rules: [
            { required: true, trigger: 'blur', message: 'E-mail是必填內容' },
            {
              type: 'email',
              message: '請輸入正確的郵箱地址',
              trigger: 'blur'
            }
          ]
        },
        {
          field: 'account',
          label: '帳號',
          placeholder: '請輸入帳號',
          rules: [
            { required: true, trigger: 'blur', message: '帳號是必填內容' },
            {
              pattern: /^[0-9]{10}$/,
              message: '帳號必須是10位數字',
              trigger: 'blur'
            }
          ]
        },
        {
          field: 'password',
          label: '密碼',
          type: 'password',
          placeholder: '請輸入密碼',
          rules: [
            { required: true, trigger: 'blur', message: '密碼是必填內容' },
            {
              pattern: /^[0-9]{10}$/,
              message: '密碼必須是10位數字',
              trigger: 'blur'
            }
          ]
        }
      ]
    }

    return {
      modelValue,
      formConfig
    }
  }
})
</script>
