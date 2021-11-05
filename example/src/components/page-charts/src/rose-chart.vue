<template>
  <div>
    <BaseChart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { EChartsOption } from 'echarts'
import BaseChart from '@/base-ui/chart'
import { IDataType } from '../types/type'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed<EChartsOption>(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    // 顯示工具列
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false,
          title: 'data view',
          lang: ['data view', 'close', 'reset']
        },
        restore: { show: true, title: 'reset' },
        saveAsImage: { show: true, title: 'save' }
      }
    },
    // 顯示提示框
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: []
    },
    series: [
      {
        name: '商品數量',
        type: 'pie',
        radius: [5, 90],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
