import { createNamespacedHelpers, mapActions } from 'vuex'
import { useMapper2 } from './useMapper'

export function useActions(moduleName: string, mapper: string[] | string) {
  let mapperFn = mapActions
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions
  } else {
    mapper = moduleName
  }

  return useMapper2(mapper, mapperFn)
}
