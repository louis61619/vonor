import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      placeholder: '請輸入角色名'
    },
    {
      field: 'intro',
      label: '權限介紹',
      placeholder: '請輸入權限介紹'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '創建時間',
      otherOptions: {
        startPlaceholder: '開始時間',
        endPlaceholder: '結束時間',
        type: 'daterange'
      }
    }
  ]
}
