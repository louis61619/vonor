import request from '@/service'

import { IData } from '@/service/types'
import { IAccount, ILoginResult } from './type'

enum loginApi {
  AccountLogin = '/login',
  userInfo = '/users/',
  userMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return request.post<IData<ILoginResult>>({
    url: loginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return request.get<IData>({
    url: loginApi.userInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return request.get<IData>({
    url: loginApi.userMenu + id + '/menu',
    showLoading: false
  })
}
