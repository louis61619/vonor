import { createPage } from '@vuepress/core'

export default {
  // 創建範例頁面
  async onInitialized(app: any) {
    if (app.pages.every((page: any) => page.path !== '/example')) {
      const example = await createPage(app, {
        path: '/example',
        frontmatter: {
          layout: 'Layout'
        },
        // 设置 markdown 内容
        content: '開發中請透過 pnpm docs:dev 開啟範例後台頁面'
      })
      // 把它添加到 `app.pages`
      app.pages.push(example)
    }
  }
}
