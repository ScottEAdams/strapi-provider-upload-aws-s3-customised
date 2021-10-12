module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        browser: false
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    }
}