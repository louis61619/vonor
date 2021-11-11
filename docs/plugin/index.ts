import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

// const localMd = MarkdownIt()
// const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      // const data = (md as any).__data || {}
      // const hoistedTags: string[] = data.hoistedTags || (data.hoistedTags = [])

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, '../examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        const code = md.options.highlight && md.options.highlight(source, 'vue', '')

        const arr = source.match(/\n*(.*)import\s*(.*)/g) || []
        const otherCode = []

        // console.log(arr)

        for (const item of arr) {
          // console.log(item.trim(), as);
          if (!/^[^//]/.test(item.trim())) continue
          const output = item.trim().match(/from\s['|"](\S*)['|"]/)

          if (!output?.length) continue

          const isAbosulotePath = /^\./.test(output[1])
          if (!isAbosulotePath) continue
          // otherCode.push(output[1], sourceFile)
          const filepath = path.resolve(__dirname, '../examples/form', `${output[1]}.ts`)
          fs.existsSync(filepath)
          const newCode = fs.readFileSync(
            path.resolve(__dirname, '../examples/form', `${output[1]}.ts`),
            'utf-8'
          )
          otherCode.push({
            pathName: output[1],
            code: newCode
          })
        }

        // console.log(source.trim().match(/^import/))

        // const { html, js, css, cssPreProcessor, jsPreProcessor } = generateCodePenSnippet(source)
        return `<Demo source="${encodeURIComponent(
          code || ''
        )}" path="${sourceFile}" description="${description}" otherCode="${encodeURIComponent(
          JSON.stringify(otherCode)
        )}">`
        //   <template #highlight>
        //   <div v-pre class="language-vue">
        //     ${code}
        //   </div>
        // </template>
      } else {
        return '</Demo>'
      }
    }
  } as ContainerOpts)
}

export const demoBlockPlugin = {
  extendsMarkdown: async (md: any) => {
    // const shiki = shikiPlugin as any
    // await shiki({ theme: 'github-light', lang: 'vue' }).extendsMarkdown(md)
    md.use(mdPlugin)
  }
}
