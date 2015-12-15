module.exports = {
  entry: {
    app: './app/App.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: /app/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: './public/js/bundle.js'
  }
};