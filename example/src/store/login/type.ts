export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

export enum MutaionTypes {
  CHANGE_TOKEN = 'CHANGE_TOKEN',
  CHANGE_USER_INFO = 'CHANGE_USER_INFO',
  CHANGE_USER_MENUS = 'CHANGE_USER_MENUS'
}
