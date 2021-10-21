import { App } from 'vue'
import { formateUtcString } from '@/utils/date-formate'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formateTime(time: string) {
      return formateUtcString(time)
    }
  }
}
