module.exports = {
  presets: [
    ['@babel/preset-env'],
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
