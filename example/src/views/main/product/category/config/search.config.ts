import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '類別名稱',
      placeholder: '請輸入類別名稱',
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
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' }
}
