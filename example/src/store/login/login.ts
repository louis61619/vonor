import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { ILoginState, MutaionTypes } from './type'
import { IRootStore } from '../type'

import { mapMenuRoutes, mapMenuToPermission } from '@/utils/map-meuns'

import localCache from '@/utils/cache'

import router from '@/router'

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  mutations: {
    [MutaionTypes.CHANGE_TOKEN](state, payload) {
      state.token = payload
    },
    [MutaionTypes.CHANGE_USER_INFO](state, payload) {
      state.userInfo = payload
    },
    [MutaionTypes.CHANGE_USER_MENUS](state, payload) {
      state.userMenus = payload

      // 對路由進行加載
      const routes = mapMenuRoutes(payload)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 獲取用戶按鈕權限
      const permissions = mapMenuToPermission(payload)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 獲取toekn
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit(MutaionTypes.CHANGE_TOKEN, token)
      localCache.setCache('token', token)

      // 獲取用戶信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit(MutaionTypes.CHANGE_USER_INFO, userInfo)
      localCache.setCache('userInfo', userInfo)

      // 獲取用戶菜單
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit(MutaionTypes.CHANGE_USER_MENUS, userMenus)
      localCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalStore({ commit }) {
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) commit(MutaionTypes.CHANGE_USER_INFO, userInfo)

      const token = localCache.getCache('token')
      if (token) {
        commit(MutaionTypes.CHANGE_TOKEN, token)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) commit(MutaionTypes.CHANGE_USER_MENUS, userMenus)
    }
  }
}

export default loginModule
