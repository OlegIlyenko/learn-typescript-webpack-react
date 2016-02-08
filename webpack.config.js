const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/app.tsx',
    'bootstrap-loader/extractStyles'
  ],

  devtool: 'source-map',

  output: {
    path: __dirname + "/out",
    publicPath: "/assets/",
    filename: "app.js"
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  plugins: [
    new ExtractTextPlugin('app.css', {allChunks: true})
  ],

  module: {
    loaders: [
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules!sass?sourceMap")},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
      {test: /\.tsx?$/, loaders: ['react-hot', 'ts', 'strict']},
      {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
      {test: /bootstrap-sass[\\\/].*\.js/, loader: 'imports?jQuery=jquery'}
    ]
  },

  sassLoader: {
    includePaths: [__dirname + "/src"]
  }
}