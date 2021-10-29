import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  itemStyle: {},
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      label: '用戶名',
      placeholder: '請輸入用戶名'
    },
    {
      field: 'realname',
      label: '真實性名',
      placeholder: '請輸入真實性名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密碼',
      placeholder: '請輸入密碼',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '電話號碼',
      placeholder: '請輸入電話號碼'
    },
    {
      field: 'departmentId',
      label: '部門',
      placeholder: '請選擇部門',
      type: 'select',
      options: []
    },
    {
      field: 'roleId',
      label: '權限',
      placeholder: '請選擇權限',
      type: 'select',
      options: []
    }
  ]
}
