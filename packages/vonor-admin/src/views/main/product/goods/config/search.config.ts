import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名稱',
      placeholder: '請輸入商品名稱',
      rules: []
    },
    {
      field: 'status',
      type: 'select',
      label: '狀態',
      placeholder: '請選擇狀態',
      rules: [],
      options: [
        { label: '可用', value: 1 },
        { label: '下架', value: 0 }
      ]
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
  labelWidth: '100px'
  // itemStyle: { padding: '10px 40px' },
  // colLayout: { span: 8 }
}
