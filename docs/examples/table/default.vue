<template>
  <Table v-bind="contentConfig" :list="datalist" :list-count="datalist.length"></Table>
  <!-- <div>jfiejfei</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Table } from '@vonor/ui'

export default defineComponent({
  components: {
    Table
  },
  setup() {
    const datalist = [
      {
        id: 705,
        name: 'Renny',
        realname: 'Renny',
        cellphone: 1231232131,
        enable: 1,
        departmentId: 5,
        roleId: 3,
        createAt: '2021-08-29 07:33:38',
        updateAt: '2021-08-29 07:33:38'
      },
      {
        id: 704,
        name: 'Louis',
        realname: 'Louis',
        cellphone: 1231232131,
        enable: 1,
        departmentId: 5,
        roleId: 3,
        createAt: '2021-08-29 07:33:38',
        updateAt: '2021-08-29 07:33:38'
      },
      {
        id: 702,
        name: 'Jenny',
        realname: 'Jenny',
        cellphone: 13322223338,
        enable: 1,
        departmentId: 1,
        roleId: 1,
        createAt: '2021-08-29 07:22:56',
        updateAt: '2021-08-29 07:22:56'
      }
    ]

    const contentConfig = {
      showIndexColumn: true,
      // showSelectColum: true,
      title: '用戶列表',
      propsList: [
        {
          prop: 'name',
          label: '用戶名',
          minWidth: '100'
        },
        {
          prop: 'realname',
          label: '真實姓名',
          minWidth: '100'
        },
        {
          prop: 'cellphone',
          label: '手機號碼',
          minWidth: '100'
        },
        {
          prop: 'enable',
          label: '狀態',
          minWidth: '100',
          slotName: 'status'
        },
        {
          prop: 'createAt',
          label: '創建時間',
          minWidth: '250',
          slotName: 'createAt'
        },
        {
          prop: 'updateAt',
          label: '更新時間',
          minWidth: '250',
          slotName: 'updateAt'
        }
      ]
    }

    return {
      contentConfig,
      datalist
    }
  }
})
</script>

<style scoped></style>
