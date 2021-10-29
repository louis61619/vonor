import { createNamespacedHelpers, mapMutations } from 'vuex'
import { useMapper2 } from './useMapper'

export function useMutations(moduleName: string, mapper: string[] | string) {
  let mapperFn = mapMutations
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations
  } else {
    mapper = moduleName
  }
  return useMapper2(mapper, mapperFn)
}
