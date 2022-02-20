const express = require('express')

const app = express()

app.use('/vonor', express.static('./.vuepress/dist'))

app.listen(8000, () => {
  console.log('靜態資源服務器啟動成功')
})
