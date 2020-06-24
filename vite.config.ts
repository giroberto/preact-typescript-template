// @ts-check
const preactRefresh = require('@prefresh/vite')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  // With typescript we can't use the preact profile or it will complain about typings
  jsx: {
    factory: 'h',
    fragment: 'Fragment'
  },
  plugins: [preactRefresh()]
}

module.exports = config
