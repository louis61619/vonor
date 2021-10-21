import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  itemStyle: {},
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      label: '角色名',
      placeholder: '請輸入角色名'
    },
    {
      field: 'intro',
      label: '角色介紹',
      placeholder: '請輸入角色介紹'
    }
  ]
}
