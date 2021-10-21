<template>
  <div class="user">
    <PageSearch
      :formConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="goods"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #image="scope">
        <el-image
          class="image"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">${{ scope.row.oldPrice }}</template>
      <template #newPrice="scope">${{ scope.row.newPrice }}</template>
    </PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="department"
    >
      <template #image="scope">
        <!-- <el-image class="image" :src="defaultInfo[scope.row.field]"></el-image> -->
        <!-- <el-upload
          action="#"
          list-type="picture-card"
          :file-list="[{ url: defaultInfo[scope.row.field] }]"
        >
          <i class="el-icon-plus"></i>
        </el-upload> -->
        <el-upload class="avatar-uploader" action="#" :show-file-list="false">
          <img
            v-if="defaultInfo[scope.row.field]"
            :src="defaultInfo[scope.row.field]"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </template>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import usePageSearch from '@/hook/use-page-search'
import usePageModal from '@/hook/use-page-modal'

// import { formConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { contentConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

    const editCallback = () => {
      return
    }
    const { pageModalRef, handleNewData, handleEditData, defaultInfo } = usePageModal(
      undefined,
      editCallback
    )

    return {
      searchFormConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfig,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}
.avatar {
  width: 128px;
  height: 128px;
  display: block;
  object-fit: cover;
}
</style>
<style lang="less" scoped>
.image {
  width: 50px;
  height: 50px;
}
.image::v-deep img {
  object-fit: cover;
}
</style>
