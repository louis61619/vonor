const path = require('path')

module.exports = {
  publicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        '@vonor/ui': path.resolve(__dirname, '../packages/vonor-ui/src')
      }
    }
  }
}
