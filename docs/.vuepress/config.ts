import type { ViteBundlerOptions } from 'vuepress-vite'
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import { path } from '@vuepress/utils'
import { demoBlockPlugin } from '../plugin'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: '@vuepress/bundler-vite',
  port: 3002,
  alias: {
    '@vonor/pro-component': path.resolve(__dirname, '../../packages/vonor-pro-component/src')
  },
  plugins: [[demoBlockPlugin as any]],
  // Vite 打包工具的配置项
  bundlerConfig: {
    // 查看下方
  },
  themeConfig: {
    // logo: '/logo.png',
    repo: 'https://github.com/louis61619/vonor-admin',
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
})
