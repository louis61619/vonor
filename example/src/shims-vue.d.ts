/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png'
// declare const
declare let $store: any
declare module '*.json'
declare let $filter: any
