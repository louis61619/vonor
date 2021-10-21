<template>
  <div>
    <BaseChart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

import BaseChart from '@/base-ui/chart'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    yValues: any[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true, title: 'save' }
      }
    },
    legend: {},
    // 上下左右間距
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分類銷量',
        type: 'line',
        stack: '總量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.yValues
      }
    ]
  }
})
</script>

<style scoped></style>
