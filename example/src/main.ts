import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import { globalRegister } from '@/global'
import { setupStore } from '@/store'

import './assets/css/index.less'
import 'normalize.css'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
const { mockXHR } = require('@vonor/mock')
mockXHR()

const app = createApp(App)

app.use(store)
app.use(globalRegister)
setupStore(app)
app.use(router)
app.mount('#app')
