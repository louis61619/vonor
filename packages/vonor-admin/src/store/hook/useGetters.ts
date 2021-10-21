import { useMapper } from './useMapper'
import { mapGetters, createNamespacedHelpers } from 'vuex'

export function useGetters(moduleName: string, mapper: string[] | string) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}
