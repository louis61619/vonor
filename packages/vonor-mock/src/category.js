const list = [
  {
    id: 8,
    name: '女裝',
    createAt: '2021-04-30T13:25:43.000Z',
    updateAt: '2021-04-30T13:25:43.000Z'
  },
  {
    id: 7,
    name: '床上用品',
    createAt: '2021-04-19T07:56:58.000Z',
    updateAt: '2021-04-19T07:56:58.000Z'
  },
  {
    id: 6,
    name: '家具',
    createAt: '2021-04-19T07:56:52.000Z',
    updateAt: '2021-04-19T07:56:52.000Z'
  },
  {
    id: 5,
    name: '廚具',
    createAt: '2021-04-19T07:56:43.000Z',
    updateAt: '2021-04-19T07:56:43.000Z'
  },
  {
    id: 4,
    name: '鞋子',
    createAt: '2021-04-19T07:56:31.000Z',
    updateAt: '2021-04-19T07:56:31.000Z'
  },
  {
    id: 3,
    name: '褲子',
    createAt: '2021-04-19T07:56:27.000Z',
    updateAt: '2021-04-19T07:56:27.000Z'
  },
  {
    id: 2,
    name: '上衣',
    createAt: '2021-04-19T07:55:28.000Z',
    updateAt: '2021-04-19T07:55:28.000Z'
  }
]
module.exports = [
  {
    url: '/category/list',
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
