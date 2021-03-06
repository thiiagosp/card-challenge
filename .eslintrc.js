module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: ['standard'],
    plugins: [
        'html', 'vue'
    ],
    'rules': {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ['warn', 4],
        'max-len': ["error", { "code": 150 }],
        'semi': ['warn', 'always'],
        'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'never' }],
    }
}
