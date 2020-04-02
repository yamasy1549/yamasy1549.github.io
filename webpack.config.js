const path = require('path')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, ''),
    filename: 'index.js'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [ require('autoprefixer')() ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff)$/,
        use: { loader: 'file-loader', options: { name: '[path][name].[ext]' } }
      }
    ]
  }
}
