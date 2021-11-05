const BASE_URL = process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_API
const TIME_OUT = 3000

export { BASE_URL, TIME_OUT }
