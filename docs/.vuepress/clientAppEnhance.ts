import { defineClientAppEnhance } from '@vuepress/client'
import { h } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import Demo from '../global/demo.vue'

const compsMap = []

require
  .context('../examples', true, /.vue$/)
  .keys()
  .forEach(path => {
    const currentKey = path.replace(/^\.\//, '').replace(/.vue$/, '')
    compsMap[currentKey] = require('../examples/' + currentKey).default
  })

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.use(ElementPlus)
  app.component('Demo', (props, { slots }) => h(Demo, { ...props }, slots))
  app.config.globalProperties.$compsMap = compsMap
})
