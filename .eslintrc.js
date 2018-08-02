// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['standard'],
  // required to lint *.vue files
  plugins: [
      'html', 'vue'
  ],
  // check if imports actually resolve
  // settings: {
  //     'import/resolver': {
  //         webpack: {
  //             config: 'build/webpack.base.conf.js'
  //         }
  //     }
  // },
  // add your custom rules here
  'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

      'indent': ['warn', 4],

      'max-len': ["error", { "code": 150 }],

      'semi': ['warn', 'always'],

      'space-before-blocks': 2,

      'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'never' }],
  }
}
