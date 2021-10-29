module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 自動引入對應的樣式
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ]
}
