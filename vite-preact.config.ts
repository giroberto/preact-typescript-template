// @ts-check
const preactRefresh = require("@prefresh/vite");

/**
 * @type { import('vite').UserConfig }
 */
const configPreact = {
  // With typescript we can't use the preact profile or it will complain about typings
  jsx: {
    fragment: "Fragment",
  },
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  plugins: [preactRefresh()],
};

module.exports = configPreact;
