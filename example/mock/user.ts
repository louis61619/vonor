// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   editor: {
//     token: 'editor-token'
//   }
// }

// const users = {
//   'admin-token': {
//     roles: ['admin'],
//     introduction: 'I am a super administrator',
//     avatar:
//       'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Super Admin'
//   },
//   'editor-token': {
//     roles: ['editor'],
//     introduction: 'I am an editor',
//     avatar:
//       'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Normal Editor'
//   }
// }

const list = [
  {
    id: 705,
    name: 'Renny',
    realname: 'Renny',
    cellphone: 1231232131,
    enable: 1,
    departmentId: 5,
    roleId: 3,
    createAt: '2021-08-29T07:33:38.000Z',
    updateAt: '2021-08-29T07:33:38.000Z'
  },
  {
    id: 704,
    name: 'Louis',
    realname: 'Louis',
    cellphone: 1231232131,
    enable: 1,
    departmentId: 5,
    roleId: 3,
    createAt: '2021-08-29T07:33:38.000Z',
    updateAt: '2021-08-29T07:33:38.000Z'
  },
  {
    id: 702,
    name: 'Jenny',
    realname: 'Jenny',
    cellphone: 13322223338,
    enable: 1,
    departmentId: 1,
    roleId: 1,
    createAt: '2021-08-29T07:22:56.000Z',
    updateAt: '2021-08-29T07:22:56.000Z'
  },
  {
    id: 7,
    name: 'kobe',
    realname: 'kobe',
    cellphone: 16655556666,
    enable: 1,
    departmentId: 2,
    roleId: 3,
    createAt: '2021-05-02T07:24:12.000Z',
    updateAt: '2021-05-02T07:26:20.000Z'
  },
  {
    id: 6,
    name: 'lily',
    realname: 'lily',
    cellphone: 13355556666,
    enable: 1,
    departmentId: 2,
    roleId: 3,
    createAt: '2021-05-02T07:24:12.000Z',
    updateAt: '2021-05-02T07:26:20.000Z'
  },
  {
    id: 5,
    name: 'demo',
    realname: 'demo',
    cellphone: 17766665555,
    enable: 1,
    departmentId: 5,
    roleId: 4,
    createAt: '2021-08-23T07:24:12.000Z',
    updateAt: '2021-08-23T07:24:21.000Z'
  },
  {
    id: 4,
    name: 'test',
    realname: 'test',
    cellphone: 16655552222,
    enable: 1,
    departmentId: 3,
    roleId: 3,
    createAt: '2021-08-23T07:25:02.000Z',
    updateAt: '2021-08-23T07:25:09.000Z'
  }
]

export default [
  // user list
  {
    url: '/users/list',
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
  },
  {
    url: '/login',
    type: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          id: 1,
          name: 'admin',
          token: 'admin-token'
        }
      }
    }
  },
  {
    url: '/users/1',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          id: 1,
          name: 'louis',
          realname: 'louis',
          cellphone: 18812345678,
          enable: 1,
          createAt: '2021-01-02T10:20:26.000Z',
          updateAt: '2021-01-03T04:50:13.000Z',
          role: {
            id: 1,
            name: '超級管理員',
            intro: '所有權限',
            createAt: '2021-01-02T10:01:52.000Z',
            updateAt: '2021-01-02T10:01:52.000Z'
          },
          department: {
            id: 1,
            name: '管理部',
            parentId: null,
            createAt: '2021-01-02T10:03:09.000Z',
            updateAt: '2021-01-05T08:25:46.000Z',
            leader: 'louis'
          }
        }
      }
    }
  }
  // user login
  // {
  //   url: '/vue-element-admin/user/login',
  //   type: 'post',
  //   response: (config) => {
  //     const { username } = config.body
  //     const token = tokens[username]

  //     // mock error
  //     if (!token) {
  //       return {
  //         code: 60204,
  //         message: 'Account and password are incorrect.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: token
  //     }
  //   }
  // },

  // // get user info
  // {
  //   url: '/vue-element-admin/user/info.*',
  //   type: 'get',
  //   response: (config) => {
  //     const { token } = config.query
  //     const info = users[token]

  //     // mock error
  //     if (!info) {
  //       return {
  //         code: 50008,
  //         message: 'Login failed, unable to get user details.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: info
  //     }
  //   }
  // },

  // // user logout
  // {
  //   url: '/vue-element-admin/user/logout',
  //   type: 'post',
  //   response: (_) => {
  //     return {
  //       code: 20000,
  //       data: 'success'
  //     }
  //   }
  // }
]
