module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    ['prismjs', {
      languages: ['javascript', 'css', 'markup', 'scala'],
      plugins: ['line-numbers'],
      theme: 'default',
      css: true,
    }],
  ],
};
