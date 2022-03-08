"use strict";(self.webpackChunk_vonor_docs=self.webpackChunk_vonor_docs||[]).push([[746],{5166:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o={key:"v-56ea82fc",path:"/guilde/overview.html",title:"介紹",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"為什麼要使用 monorepo",slug:"為什麼要使用-monorepo",children:[]},{level:2,title:"啟動",slug:"啟動",children:[]},{level:2,title:"目錄",slug:"目錄",children:[]}],filePathRelative:"guilde/overview.md",git:{updatedTime:1645338447e3,contributors:[{name:"louis",email:"louis61619@gmail.com",commits:1}]}}},5671:(e,a,n)=>{n.r(a),n.d(a,{default:()=>p});const o=(0,n(511).uE)('<h1 id="介紹" tabindex="-1"><a class="header-anchor" href="#介紹" aria-hidden="true">#</a> 介紹</h1><p>本項目是基於 vue3 和 element-plus 的後台解決方案，包含 mock 方案、組件二次封裝、cli，使用 pnpm 和 monorepo 進行管理。</p><h2 id="為什麼要使用-monorepo" tabindex="-1"><a class="header-anchor" href="#為什麼要使用-monorepo" aria-hidden="true">#</a> 為什麼要使用 monorepo</h2><p>本項目是基於 monorepo 的架構，monorepo 是 Vue、React、Webpack 等大型開源庫中使用的架構方式，有些人會認為 monorepo 不適合在一般的商業項目中使用，不過除了使用上的一點複雜性，monorepo 能夠讓程式碼的組織結構更為清晰並做到相當程度的程式碼複用。</p><p>例如，在一般的商業後台項目中會需要實作出面向不同使用者的後台項目，而現在比較流行的 Saas 軟件服務可能會同時出現面向公司內部業務人員、經銷商、開發者等不同類型的後台，這些後台項目可能會有共用的組件和函式庫，如果想要共用這些程式碼，一種方式是將其發布到 npm 私有倉庫中進行依賴的安裝。</p><p>不過由於項目依然處於開發中可能會導致頻繁修改，開發者就有可能要不斷重複將共用的庫發布到 npm 中，這種方式更適合已經成熟並運作多年的項目。</p><p>另一種方式就是使用 monorepo 架構，將需要共用的程式碼拆分到獨立 workspace 中，在 workspace 中的項目會透過類似 npm 包的方式共享到全局中，同時要進行項目的發佈也有 lerna 等開源方案可以進行快速發布。</p><h2 id="啟動" tabindex="-1"><a class="header-anchor" href="#啟動" aria-hidden="true">#</a> 啟動</h2><p>本項目使用 pnpm 進行管理，請先確保已經在全局中安裝 pnpm：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -g <span class="token function">pnpm</span>\n</code></pre></div><p>依賴安裝：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i\n</code></pre></div><p>啟動範例項目：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run -C example serve\n</code></pre></div><p>啟動項目文檔：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run -C docs dev\n</code></pre></div><h2 id="目錄" tabindex="-1"><a class="header-anchor" href="#目錄" aria-hidden="true">#</a> 目錄</h2><ul><li>/docs：項目文檔，使用 vuepress 進行開發。</li><li>/example：基於 Vue3 和 TypeScript 的開發範例。</li><li>/packages/vonor-cli：對業務開發有幫助的 command line 腳本。</li><li>/packages/vonor-eslint-config：項目中的 eslint 方案。</li><li>/packages/vonor-mock：前端的 mock 方案函式庫。</li><li>/packages/vonor-ui：基於 element-plus 二次封裝的組件庫，以配置的型式進行參數傳遞。</li></ul>',18),s={},p=(0,n(8229).Z)(s,[["render",function(e,a){return o}]])}}]);