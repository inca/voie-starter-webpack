module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: /src/
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
};
