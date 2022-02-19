import { path } from '@vuepress/utils'
import { demoBlockPlugin } from '../plugin'

export default {
  title: 'vonor',
  description: 'Vue3 + ElementPlus 組件庫',
  bundler: '@vuepress/webpack',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  // alias: {
  //   '@vonor/ui': path.resolve(__dirname, '../../packages/vonor-ui/src')
  // },
  plugins: [
    [demoBlockPlugin],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../examples'),
        getComponentName: (filename: string) => {
          return filename.replace('/', '-').replace('.vue', '')
        }
      }
    ]
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
      { text: '介紹', link: '/' },
      {
        text: '组件',
        link: '/components/form'
      }
    ],

    sidebar: {
      '/': [
        {
          text: '介紹',
          children: ['/README.md']
        }
      ],
      '/components/': [
        '/components/overview',
        {
          text: '組件',
          children: ['/components/form', '/components/table']
        }
      ]
    }
  }
}
