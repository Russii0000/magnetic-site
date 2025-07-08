module.exports = {
  input: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  output: './',
  options: {
    debug: false,
    sort: true,
    removeUnusedKeys: false,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx']
    },
    lngs: ['en', 'ar'],
    defaultLng: 'en',
    defaultNs: 'translation',
    resource: {
      loadPath: 'src/locales/{{lng}}/translation.json',
      savePath: 'src/locales/{{lng}}/translation.json',
      jsonIndent: 2,
      lineEnding: '\n'
    }
  }
};
