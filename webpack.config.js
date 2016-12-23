const glob = require('glob')

module.exports = {
  context: __dirname + '/src',
  entry: {
    jsx: './index.jsx',
    html: './index.html',
    css: './css/normalize.css',
    img: glob.sync('./src/img/**/*.*').map(f => f.replace('./src', '.')),
    font: glob.sync('./src/font/**/*.*').map(f => f.replace('./src', '.')),
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /img\/(.*\/)?.*\.(gif|png|jp(e?)g|svg)$/,
        loaders: ['file?name=[path][name].[ext]', 'img?minimize']
      },
      {
        test: /font\/.*\.(eot|otf|ttf|woff(2?)|svg(z?))$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
}
