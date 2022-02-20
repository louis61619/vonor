import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { demoBlockPlugin } from '../plugin'

export default defineUserConfig({
  title: 'Vonor',
  description: `基於 Vue3 和 Element-plus 的後台構建方案`,
  bundler: '@vuepress/webpack',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  base: process.env.NODE_ENV === 'production' ? '/vonor/' : '/',
  // alias: {
  //   '@vonor/ui': path.resolve(__dirname, '../../packages/vonor-ui/src')
  // },
  plugins: [
    [demoBlockPlugin as any],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../examples'),
        getComponentName: (filename: string) => {
          return filename.replace('/', '-').replace('.vue', '')
        }
      }
    ]
    // [onInit]
  ],
  markdown: {
    code: {
      lineNumbers: false
    }
    // config: (md) => mdPlugin(md)
  },
  themeConfig: {
    // logo: '/logo.png',
    repo: 'https://github.com/louis61619/vonor',
    darkMode: false,
    // editLink: false,
    navbar: [
      { text: '指南', link: '/guilde/overview' },
      {
        text: '组件',
        link: '/components/form'
      }
    ],
    sidebar: {
      '/': ['/guilde/overview'],
      '/components/': ['/components/form', '/components/table']
    }
  }
})
