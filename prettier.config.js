module.exports = {
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'auto',
    printWidth: 110,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    jsxBracketSameLine: false,
    trailingComma: 'none',
    tabWidth: 4,
    useTabs: true,
    overrides: [
        {
            files: 'package*.json',
            options: {
                printWidth: 1000
            }
        },
        {
            files: '*.yml',
            options: {
                singleQuote: false
            }
        }
    ]
}
