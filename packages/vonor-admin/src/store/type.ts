import { ILoginState } from './login/type'
// import { ISystemState } from './main/system/type'

interface IRootStore {
  title: string
}

interface IRootWithModule {
  login: ILoginState
  // system: ISystemState
}

type IStoreType = IRootStore & IRootWithModule

export { IRootStore, IStoreType }
