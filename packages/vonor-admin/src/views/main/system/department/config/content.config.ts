export const contentTableConfig = {
  title: '部門列表',
  propsList: [
    { prop: 'name', label: '部門名稱', minWidth: '120' },
    { prop: 'leader', label: '部門領導', minWidth: '120' },
    // { prop: 'parentId', label: '上级部门', minWidth: '120' },
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
  showIndexColumn: true,
  showSelectColumn: true
}
