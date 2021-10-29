<template>
  <div class="overview">
    <BaseCard title="簡介">
      <div class="c-left">
        本項目是基於Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart等技術的後台解決方案，項目中所有數據都是使用Mock.js進行模擬
      </div>
    </BaseCard>
    <BaseCard title="技術棧">
      <BaseTextLink :text-arrs="technologyStacks" />
    </BaseCard>
    <BaseCard title="項目規範">
      <BaseDescriptions
        title="全局變量"
        :column="1"
        :table-datas="[{ name: 'VUE_APP_API', description: '後端API的baseURL' }]"
      />
      <BaseDescriptions
        title="文件命名規範"
        :column="1"
        :table-datas="[
          { name: '文件夾', description: '小寫，多個單詞使用-分割，EX: nav-bar' },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '小寫，多個單詞使用-分割，EX: nav-header.vue'
          }
        ]"
      />
      <BaseDescriptions
        title="組件編寫規範"
        :column="1"
        :table-datas="[
          { name: '組件結構', description: '放在src資料夾下，統一於index.ts中導出' },
          {
            name: '組件名稱',
            description: '除了全局導入的組件，統一大寫駝峰，EX: NavHeader'
          },
          {
            name: '組件樣式',
            description: '小寫，多個單詞使用-分割，EX: nav-header'
          }
        ]"
      />
    </BaseCard>
    <BaseCard title="git提交規範">
      <div class="c-left">統一使用npm run commit進行命令行交互式提交</div>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseDescriptions from '@/base-ui/descriptions'
import BaseTextLink from '@/base-ui/text-link'
// import HyCode from '@/base-ui/code'
import BaseCard from '@/base-ui/card'
import { technologyStacks } from './config'

export default defineComponent({
  components: {
    BaseCard,
    BaseTextLink,
    BaseDescriptions
  },

  setup() {
    return {
      technologyStacks
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  background-color: #f0f2f5;
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }

  .description {
    &:deep(.el-descriptions__title) {
      font-weight: 400;
    }
  }
}
</style>
