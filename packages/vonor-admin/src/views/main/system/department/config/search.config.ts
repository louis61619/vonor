import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部門名稱',
      placeholder: '請輸入部門名稱',
      rules: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '部門領導',
      placeholder: '請輸入部門領導',
      rules: []
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '創建時間',
      rules: [],
      otherOptions: {
        startPlaceholder: '開始時間',
        endPlaceholder: '結束時間',
        type: 'daterange'
      }
    }
  ]
}
