var tsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^(.*)(?:components)(.*)$',
    '^(.*)(?:navigators)(.*)$',
    '^(.*)(?:screens)(.*)$',
    '^(.*)(?:Common)(.*)$',
    '^(.*)(?:img)(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...tsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...tsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
  ],
};
