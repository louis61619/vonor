import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部門名稱',
      placeholder: '請輸入部門名稱'
    },
    // {
    //   field: 'parentId',
    //   type: 'select',
    //   label: '上级部门',
    //   placeholder: '请选择上级部门',
    //   options: []
    // },
    {
      field: 'leader',
      type: 'input',
      label: '領導名稱',
      placeholder: '請輸入領導名稱'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
