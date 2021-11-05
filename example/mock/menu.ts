import { list } from './role/routes'
// const { list } = require("./role/routes");
export default [
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
