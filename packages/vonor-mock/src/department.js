const list = [
  {
    id: 5,
    name: '人事部',
    parentId: 1,
    createAt: '2021-01-02T10:04:02.000Z',
    updateAt: '2021-05-02T07:33:08.000Z',
    leader: 'Jenny'
  },
  {
    id: 4,
    name: '客服部',
    parentId: 2,
    createAt: '2021-01-02T10:04:02.000Z',
    updateAt: '2021-08-03T11:14:32.000Z',
    leader: 'Lily'
  },
  {
    id: 3,
    name: '運營部',
    parentId: 1,
    createAt: '2021-01-02T10:03:42.000Z',
    updateAt: '2021-01-05T08:25:52.000Z',
    leader: 'Lucy'
  },
  {
    id: 2,
    name: '研發部',
    parentId: 1,
    createAt: '2021-01-02T10:03:21.000Z',
    updateAt: '2021-01-05T08:25:49.000Z',
    leader: 'Lilei'
  },
  {
    id: 1,
    name: '管理部',
    parentId: null,
    createAt: '2021-01-02T10:03:09.000Z',
    updateAt: '2021-01-05T08:25:46.000Z',
    leader: 'Louis'
  }
]

module.exports = [
  {
    url: '/department/list',
    type: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          list,
          totalCount: list.length
        }
      }
    }
  }
]
