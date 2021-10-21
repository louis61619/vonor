import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMATE = 'YYYY-MM-DD HH:mm:ss'

export function formateUtcString(utcString: string, format: string = DATE_TIME_FORMATE) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
