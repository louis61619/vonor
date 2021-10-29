<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <StatisticalPanel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10" class="row">
      <el-col :span="7">
        <BaseCard title="分類商品數量(餅圖)">
          <PieChart :pie-data="categoryGoodsCount" />
        </BaseCard>
      </el-col>
      <el-col :span="10">
        <BaseCard title="不同城市商品销量">
          <MapChart :map-data="addressGoodsSale" />
        </BaseCard>
      </el-col>
      <el-col :span="7">
        <BaseCard title="分類商品數量(玫瑰圖)">
          <RoseChart :rose-data="categoryGoodsCount" />
        </BaseCard>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <BaseCard title="分類商品的銷量">
          <LineChart v-bind="categoryGoodsSale" />
        </BaseCard>
      </el-col>
      <el-col :span="12">
        <BaseCard title="分類商品的收藏">
          <BarChart v-bind="categoryGoodsFavor" />
        </BaseCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/data/data'
import { IDataType } from '@/components/page-charts/types/type'

import BaseCard from '@/base-ui/card'
import { PieChart, RoseChart, LineChart, BarChart, MapChart } from '@/components/page-charts'
import StatisticalPanel from '@/components/statistical-panel'

export default defineComponent({
  name: 'dashboard',
  components: {
    PieChart,
    BaseCard,
    RoseChart,
    LineChart,
    BarChart,
    MapChart,
    StatisticalPanel
  },
  setup() {
    const topPanelData = ref<any>()
    const categoryGoodsCount = ref<IDataType[]>([])
    const categoryGoodsSale = ref<{ xLabels: string[]; yValues: any[] }>({
      xLabels: [],
      yValues: []
    })
    const categoryGoodsFavor = ref<{ xLabels: string[]; yValues: any[] }>({
      xLabels: [],
      yValues: []
    })
    const addressGoodsSale = ref<IDataType[]>([])

    getAmountList().then((res) => {
      topPanelData.value = res.data
    })

    getCategoryGoodsCount().then((res) => {
      categoryGoodsCount.value = res?.data?.map((item: any) => ({
        ...item,
        value: item.goodsCount
      }))
    })

    getCategoryGoodsSale().then((res) => {
      categoryGoodsSale.value.xLabels = res?.data?.map((item: any) => item.name)
      categoryGoodsSale.value.yValues = res?.data?.map((item: any) => item.goodsCount)
    })

    getCategoryGoodsFavor().then((res) => {
      categoryGoodsFavor.value.xLabels = res?.data?.map((item: any) => item.name)
      categoryGoodsFavor.value.yValues = res?.data?.map((item: any) => item.goodsFavor)
    })

    getAddressGoodsSale().then((res) => {
      addressGoodsSale.value = res?.data?.map((item: any) => ({
        name: item.address,
        value: item.count
      }))
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style scoped>
.dashboard {
  background-color: #f0f2f5;
}
.row {
  margin-bottom: 20px;
}
</style>
