import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名稱',
      placeholder: '請輸入商品名稱',
      rules: []
    },
    {
      field: 'oldPrice',
      label: '原價格',
      placeholder: '請輸入原價格'
    },
    {
      field: 'newPrice',
      label: '新價格',
      placeholder: '請輸入新價格'
    },
    {
      field: 'imgUrl',
      label: '圖片地址',
      type: 'custom',
      slotName: 'image',
      placeholder: '請輸入圖片地址'
    },
    {
      field: 'enable',
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
      field: 'name',
      type: 'input',
      label: '商品名稱',
      placeholder: '請輸入商品名稱',
      rules: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
