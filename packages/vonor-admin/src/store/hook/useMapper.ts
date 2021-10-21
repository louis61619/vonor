import { computed } from 'vue'
import store from '@/store'
import { createNamespacedHelpers as createNamespaced } from 'vuex'
import { Mapper } from 'vuex'

export function useMapper(mapper: any, mapperFn: Mapper<any>) {
  const storeStateFn = mapperFn(mapper)
  const storeState: { [index: string]: any } = {}
  Object.keys(storeStateFn).forEach((fnKey) => {
    const fn = storeStateFn[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })
  return storeState
}

export function useMapper2(mapper: any, mapperFn: Mapper<any>) {
  const storeStateFn = mapperFn(mapper)
  const storeState: { [index: string]: any } = {}
  Object.keys(storeStateFn).forEach((fnKey) => {
    const fn = storeStateFn[fnKey].bind({ $store: store })
    storeState[fnKey] = fn
  })
  return storeState
}

export function createNamespacedHelpers(moduleName: string) {
  const { mapState, mapGetters, mapMutations, mapActions } = createNamespaced(moduleName)

  return {
    useState: (mapper: Mapper<any>) => {
      return useMapper(mapper, mapState)
    },
    useGetters: (mapper: Mapper<any>) => {
      return useMapper(mapper, mapGetters)
    },
    useActions: (mapper: Mapper<any>) => {
      return useMapper2(mapper, mapActions)
    },
    useMutations: (mapper: Mapper<any>) => {
      return useMapper2(mapper, mapMutations)
    }
  }
}
