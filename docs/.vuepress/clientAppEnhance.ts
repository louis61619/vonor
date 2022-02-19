import { defineClientAppEnhance } from '@vuepress/client'
import { h } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import Demo from '../global/demo.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.use(ElementPlus)
  app.component('Demo', (props, { slots }) => h(Demo, { ...props }, slots))
})
