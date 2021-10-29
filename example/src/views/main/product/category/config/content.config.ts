export const contentTableConfig = {
  title: '類別列表',
  propsList: [
    { prop: 'name', label: '類別名稱', minWidth: '120' },
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
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true
  // showSelectColumn: true
}
