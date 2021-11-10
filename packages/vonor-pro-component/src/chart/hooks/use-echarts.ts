import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as echarts from 'echarts'
// import { GeoJSONSourceInput } from 'echarts'
import emitter from '@/utils/event-bus'

import chinaMapData from '../data/china.json'
import taiwanMapData from '../data/taiwan.json'
echarts.registerMap('china', chinaMapData as any)
echarts.registerMap('taiwan', taiwanMapData as any)

export default function useEcharts(options: echarts.EChartsOption) {
  const echartRef = ref<HTMLElement>()
  let echartInstance: echarts.ECharts | undefined

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance?.setOption(options)
  }

  const updateSize = () => {
    echartInstance?.resize()
  }

  onMounted(() => {
    if (echartRef.value) {
      echartInstance = echarts.init(echartRef.value)
      echartInstance.setOption(options)
      window.addEventListener('resize', updateSize)
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSize)
  })

  onMounted(() => {
    emitter.on('handleFoldChange', updateSize)
  })

  onBeforeUnmount(() => {
    emitter.off('handleFoldChange', updateSize)
  })

  return {
    echartRef,
    setOptions,
    updateSize,
    echartInstance
  }
}
