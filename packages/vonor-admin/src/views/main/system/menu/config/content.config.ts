export const contentConfig = {
  title: '菜單列表',
  showFooter: false,
  propsList: [
    {
      prop: 'name',
      label: '菜單名稱',
      minWidth: '200'
    },
    { prop: 'type', label: '類型', minWidth: '60' },
    { prop: 'url', label: '菜單url', minWidth: '100' },
    { prop: 'icon', label: '菜單icon', minWidth: '100' },
    // { prop: 'permission', label: '按鈕權限', minWidth: '100' },
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
    }
    // {
    //   label: '操作',
    //   minWidth: '120',
    //   slotName: 'handler'
    // }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
