var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  noInfo: true,
  entry: {
    app: 'index',
    common: ['antd', 'react-router']
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[chunkhash:8].[name].js'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx', 'index.js']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'moment': true,
    'mockjs': 'Mock',
    'jQuery': '$',
    'jquery': '$'
  },
  plugins: [
    new Visualizer(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),

    new HtmlwebpackPlugin({
      title: 'RSS.APP',
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: '../assets/_layouts.ejs', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['app', 'common'],
      cdn: '/assets/CDNLibs' //no need more move to chunks
    }),
    new ExtractTextPlugin('css/[name].css', {
      publicPath: 'css/',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common'],
      filename: 'js/[name].vendor.js',
      minChunks: Infinity
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /(\.less)$/, loader: ExtractTextPlugin.extract('style', 'css!less') },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
