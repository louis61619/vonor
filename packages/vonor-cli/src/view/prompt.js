const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'enter path from src/views/',
      validate: notEmpty('path')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        },
        {
          name: 'route',
          value: 'route',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'View require at least a <script> or <template> tag.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const path = data.path.replace(/\/$/, '')
    const name = path.split('/').slice(-1)[0]
    const actions = [
      {
        type: 'add',
        path: `src/views/${path}/${name}.vue`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      },
      {
        type: 'add',
        path: `src/router/${path}/${name}.ts`,
        templateFile: 'plop-templates/route/index.hbs',
        data: {
          name: name,
          path: path,
          route: data.blocks.includes('route'),
        }
      }
    ]

    return actions
  }
}
