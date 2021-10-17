module.exports = {
    root: true,
    env: {
        node: true
    },
    rules: {
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false
                }
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 0
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', // Allows for the use of imports
        parser: '@typescript-eslint/parser', // 解析 .ts 文件
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ], // 插件
    plugins: ['@typescript-eslint'] //定义了该eslint文件所依赖的插件
}
