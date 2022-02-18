# 本項目

基於 vue3 和 element-plus 的後台解決方案，包含 mock 方案、組件二次封裝、cli，使用 pnpm 和 monorepo 進行管理。



## 為什麼要使用 monorepo

本項目是基於 monorepo 的架構，monorepo 是 Vue、React、Webpack 等大型開源庫中使用的架構方式，有些人會認為 monorepo 不適合在一般的商業項目中使用，不過除了使用上的一點複雜性，monorepo 能夠讓程式碼的組織結構更為清晰並做到相當程度的程式碼複用。

例如，在一般的商業後台項目中會需要實作出面向不同使用者的後台項目，而現在比較流行的 Saas 軟件服務可能會同時出現面向公司內部業務人員、經銷商、開發者等不同類型的後台，這些後台項目可能會有共用的組件和函式庫，如果想要共用這些程式碼，一種方式是將其發布到 npm 私有倉庫中進行依賴的安裝。

不過由於項目依然處於開發中可能會導致頻繁修改，開發者就有可能要不斷重複將共用的庫發布到 npm 中，這種方式更適合已經成熟並運作多年的項目。

另一種方式就是使用 monorepo 架構，將需要共用的程式碼拆分到獨立 workspace 中，在 workspace 中的項目會透過類似 npm 包的方式共享到全局中，同時要進行項目的發佈也有 lerna 等開源方案可以進行快速發布。



## 啟動

本項目使用 pnpm 進行管理，請先確保已經在全局中安裝 pnpm：

```shell
npm i -g pnpm
```

依賴安裝：

```shell
pnpm i
```

啟動範例項目：

```shell
pnpm run -C example serve
```

啟動項目文檔：

```shell
pnpm run -C docs dev
```



## 目錄

- /docs：項目文檔，使用 vuepress 進行開發。
- /example：基於 Vue3 和 TypeScript 的開發範例。
- /packages/vonor-cli：對業務開發有幫助的 command line 腳本。
- /packages/vonor-eslint-config：項目中的 eslint 方案。
- /packages/vonor-mock：前端的 mock 方案函式庫。
- /packages/vonor-ui：基於 element-plus 二次封裝的組件庫，以配置的型式進行參數傳遞。

