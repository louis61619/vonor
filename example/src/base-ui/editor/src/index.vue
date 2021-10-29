<template>
  <div ref="editorRef" class="editor" :style="{ width: width ? `${width}px` : '100%' }"></div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, onBeforeUnmount, ref } from 'vue'
import type Editor from 'wangeditor'
import WangEditor from 'wangeditor'
import i18next from 'i18next'
export interface EditorInfo {
  html: string
  text: string
}
export default defineComponent({
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 0
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],

  setup(props) {
    const editorRef = ref<HTMLDivElement | null>(null)
    const isInitContent = ref<boolean>(false)
    // const content = reactive<EditorInfo>({
    //   html: '',
    //   text: ''
    // })
    const instance = ref<Editor | null>(null)

    watch(
      () => props.value,
      () => {
        initEditorContent(props.value, true)
      }
    )

    onMounted(() => {
      createWangEditor()
    })

    onBeforeUnmount(() => {
      if (!instance.value) return
      instance.value.destroy()
      instance.value = null
    })

    const createWangEditor = () => {
      instance.value = new WangEditor(editorRef.value)
      setEditorConfig()

      instance.value.create()
      initEditorContent(props.value)
    }

    const initEditorContent = (htmlStr: string, isFocus = false) => {
      if (!instance.value) return
      const editor: Editor = instance.value as Editor
      editor.config.focus = isFocus
      if (!htmlStr) return
      isInitContent.value = true
      editor.txt.html(htmlStr)
    }

    const setEditorConfig = () => {
      if (!instance.value) return
      const editor: Editor = instance.value as Editor
      // 設置英文語系
      editor.config.lang = 'en'
      editor.i18next = i18next
      // 提示位置
      editor.config.menuTooltipPosition = 'down'
      // 編輯器高度 500px
      editor.config.height = props.height
      // z-index
      editor.config.zIndex = props.zIndex
      // 取消自動 focus
      editor.config.focus = props.focus
      // 配置 onchange 回調
      // editor.config.onchange = function (newHtml: string) {
      //   content.html = newHtml
      //   content.text = editor.txt.text()
      //   if (!isInitContent.value) {
      //     emit('update:value', content.html)
      //     console.log('xx')
      //   }
      //   isInitContent.value = false
      // }
      // 觸發onChange頻率
      editor.config.onchangeTimeout = 1500
      // 菜單欄
      editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        // 'todo',
        'justify',
        'quote',
        // 'emoticon',
        // 'image',
        // 'video',
        // 'table',
        'code',
        'splitLine',
        'undo',
        'redo'
      ]
    }

    return {
      editorRef
    }
  }
})
</script>

<style lang="less" scoped>
.editor {
  text-align: left;
}
</style>
