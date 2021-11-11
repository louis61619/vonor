<template>
  <Form v-model="modelValue" v-bind="formConfig"></Form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Form from '@vonor/pro-component/form'
// import moduleName from '@vonor/ui/'
import { formConfig } from './config'

export default defineComponent({
  components: {
    Form
  },
  setup() {
    const modelValue = ref({})

    return {
      modelValue,
      formConfig
    }
  }
})
</script>
