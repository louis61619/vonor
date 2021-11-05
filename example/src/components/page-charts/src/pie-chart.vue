<template>
  <div class="pie-chart">
    <BaseChart :options="option" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseChart from '@/base-ui/chart'
import { IDataType } from '../types/type'
import { EChartsOption } from 'echarts'

const props = defineProps<{
  pieData: IDataType[]
}>()

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '商品數量',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
