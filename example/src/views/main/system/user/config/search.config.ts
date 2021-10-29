import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 6, // 24/6 = 4 1920為一排4個
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
    // {
    //   field: 'id',
    //   label: 'id',
    //   placeholder: '請輸入id'
    // },
    {
      field: 'name',
      label: '用戶名',
      placeholder: '請輸入用戶名'
    },
    {
      field: 'realname',
      label: '真實姓名',
      placeholder: '請輸入真實姓名'
    },
    {
      field: 'cellphone',
      label: '電話號碼',
      placeholder: '請輸入電話號碼'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用戶狀態',
      placeholder: '請選擇用戶狀態',
      options: [
        {
          label: '啟用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
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
