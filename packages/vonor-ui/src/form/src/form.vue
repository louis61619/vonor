<template>
  <div class="app-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- input組件 -->
          <el-col :span="8" v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="!item.type || item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  autocomplete="off"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <!-- select組件 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="options in item.options"
                    :key="options.value"
                    :value="options.value"
                    :label="options.label"
                  >
                    <!-- {{ options.label }} -->
                  </el-option>
                </el-select>
              </template>
              <!-- radio組件 -->
              <template v-else-if="item.type === 'radio'">
                <el-radio-group
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :style="item.layout"
                >
                  <el-radio
                    v-for="options in item.options"
                    v-bind="item.otherOptions"
                    :key="options.value"
                    :value="options.value"
                    :label="options.label"
                  >
                    <slot :name="item.slotName" :row="item"></slot>
                  </el-radio>
                </el-radio-group>
              </template>
              <!-- date picker組件 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
              <!-- 自訂表單 -->
              <template v-else-if="item.type === 'custom'">
                <slot :name="item.slotName" :row="item"> </slot>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IIFormItems } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IIFormItems[]>,
      // vue3 default中如果是物件和陣列要使用箭頭函數
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          xl: 6, // 24/6 = 4 1920為一排4個
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 如果直接使用物件 會修改到物件本身的引用指針
    // const formData = ref({ ...props.modelValue })

    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', {
        ...props.modelValue,
        [field]: value
      })
    }

    return {
      // formData,
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
/* 如果在scoped中選擇子元素的根元素也是會生效的 */
</style>
