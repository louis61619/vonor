import request from '@/service'

import { IData } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return request.post<IData>({
    url,
    data: queryInfo,
    showLoading: false
  })
}

export function deletePageData(url: string) {
  return request.delete<IData>({
    url,
    showLoading: false
  })
}

export function createPageData(url: string, newData: any) {
  return request.post<IData>({
    url,
    data: newData
  })
}

export function updatePageData(url: string, editData: any) {
  return request.patch<IData>({
    url,
    data: editData
  })
}
