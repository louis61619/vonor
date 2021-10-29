import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '類別名稱',
      placeholder: '請輸入類別名稱',
      rules: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
