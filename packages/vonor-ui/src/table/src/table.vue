<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="list"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProp"
    >
      >
      <el-table-column
        v-if="showSelectColum"
        width="60"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序號" align="center" width="80">
        <template #default="scope">
          {{ scope.$index + page.pageSize * (page.currentPage - 1) + 1 }}
        </template>
      </el-table-column>
      <template v-for="propItem in propsList" :key="propItem.id">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number
    },
    propsList: {
      type: Array as any,
      required: true
    },
    showIndexColumn: Boolean,
    showSelectColum: Boolean,
    title: String,
    page: {
      type: Object,
      default: () => ({
        pageSize: 10,
        currentPage: 1
      })
    },
    childrenProp: {
      type: Object,
      default: () => ({
        rowKey: 'id',
        treeProp: {
          children: 'children'
        }
      })
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
