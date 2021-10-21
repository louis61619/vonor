import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { App } from 'vue'

import { IRootStore, IStoreType } from './type'
import login from './login/login'
// import system from './main/system/system'

const store = createStore<IRootStore>({
  state: () => {
    return {
      title: 'vue3 admin'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
    // system
  }
})

export function setupStore(app: App) {
  store.dispatch('login/loadLocalStore', app)
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
