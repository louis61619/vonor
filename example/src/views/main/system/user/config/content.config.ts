export const contentConfig = {
  showIndexColumn: true,
  // showSelectColum: true,
  title: '用戶列表',
  propsList: [
    {
      prop: 'name',
      label: '用戶名',
      minWidth: '100'
    },
    {
      prop: 'realname',
      label: '真實姓名',
      minWidth: '100'
    },
    {
      prop: 'cellphone',
      label: '手機號碼',
      minWidth: '100'
    },
    {
      prop: 'enable',
      label: '狀態',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '創建時間',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新時間',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ]
}
