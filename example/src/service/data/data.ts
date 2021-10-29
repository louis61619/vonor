import request from '@/service'
import { IData } from '@/service/types'

enum DataApi {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountList() {
  return request.get<IData>({
    url: DataApi.amountList,
    showLoading: false
  })
}

export function getCategoryGoodsCount() {
  return request.get<IData>({
    url: DataApi.categoryGoodsCount,
    showLoading: false
  })
}

export function getCategoryGoodsSale() {
  return request.get<IData>({
    url: DataApi.categoryGoodsSale,
    showLoading: false
  })
}

export function getCategoryGoodsFavor() {
  return request.get<IData>({
    url: DataApi.categoryGoodsFavor,
    showLoading: false
  })
}

export function getAddressGoodsSale() {
  return request.get<IData>({
    url: DataApi.addressGoodsSale,
    showLoading: false
  })
}
