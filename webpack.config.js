const path = require('path'),
  webpack = require('webpack'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  SpriteLoaderPlugin = require('svg-sprite-loader/plugin');;

const extractPlugin = new ExtractTextPlugin({ filename: './app.css', allChunks: true });

const config = {

  // absolute path for project root
  context: path.resolve(__dirname, 'src'),

  entry: {
    // relative path declaration
    app: './app.js'
  },

  output: {
    // absolute path declaration
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },

  module: {
    rules: [

      // babel-loader with 'env' preset
      { test: /\.js$/, include: /src/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ['env'] } } },
      // html-loader
      { test: /\.html$/, use: ['html-loader'] },
      // sass-loader with sourceMap activated
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      // file-loader(for images)
      {
        test: /\.(jpg|png|gif)$/, use: [{
          loader: 'url-loader', options: {
            name: '[name].[ext]',
            limit: 10000,
            outputPath: './assets/media/'
          }
        }]
      },
      // file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']
      },
      {
        test: /\.svg$/,

        oneOf: [
          {
            include: path.resolve(__dirname, 'src/assets/media/svg/images'),
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  extract: true
                }
              },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [
                    {
                      removeAttrs: {
                        attrs: '(fill|stroke)'
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            include: path.resolve(__dirname, 'src/assets/media/svg/defs'),
            use: [
              {
                loader: 'svg-sprite-loader'
              },
              {
                loader: 'svgo-loader'
              }
            ]
          },
          {
            resourceQuery: /node_modules/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: './svg/'
                }
              }
            ]
          },
        ]
      }
    ]
  },

  plugins: [
    // cleaning up only 'dist' folder
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // extract-text-webpack-plugin instance
    extractPlugin,
    new SpriteLoaderPlugin()
  ],

  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    // open app in localhost:2000
    port: 2000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'

};

module.exports = config;
