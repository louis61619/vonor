<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumb from '@vonor/ui/breadcrumb'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    UserInfo,
    Breadcrumb
  },
  props: {
    collapse: Boolean,
    breadcrumbs: Array
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const handleFoldClick = () => {
      emit('foldChange', !props.collapse)
    }

    return {
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
