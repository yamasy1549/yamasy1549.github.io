module.exports = {
  entry: './src/index.jsx',
  output: {
    path: '',
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
        use: { loader: 'babel-loader', options: { presets: 'es2015' } }
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
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
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
