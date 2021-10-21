// import { list } from './role/routes'
const { list } = require('./role/routes')
module.exports = [
  {
    url: '/menu/list',
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
