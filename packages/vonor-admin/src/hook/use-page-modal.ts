import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export default function usePageModal(newCb?: () => void, editCb?: (item?: any) => void) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    newCb && newCb()
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  const handleEditData = (item: any) => {
    editCb && editCb(item)
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return {
    pageModalRef,
    handleNewData,
    handleEditData,
    defaultInfo
  }
}
