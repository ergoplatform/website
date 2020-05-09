module.exports = {
  plugins: {
    autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
    '@fullhuman/postcss-purgecss': {
      content: ["./layouts/**/*.html", "./components/**/**/*.html"],
      whitelist: [
        'highlight',
        'language-bash',
        'pre',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li'
      ]
    },
  },
};
