import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import { globalRegister } from '@/global'
import { setupStore } from '@/store'

// import { mockXHR } from "../mock/index.js";
// mockXHR();
import '../mock'

import './assets/css/index.less'
import 'normalize.css'

// 全局引入
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 使用Mock劫持網路請求

const app = createApp(App)

app.use(store)
app.use(globalRegister)
app.use(ElementPlus)
setupStore(app)
app.use(router)
app.mount('#app')
