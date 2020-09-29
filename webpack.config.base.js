const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const WebpackAliases = require('./aliases');

module.exports = (env) => {
  return merge([
    {
      entry: ['./src/index.tsx'],
      output: {
        publicPath: '/',
        path: `${WebpackAliases.root}/build`,
        filename: 'bundle.[contenthash].js',
        chunkFilename: '[name].bundle.[contenthash].js'
      },
      resolve: {
        mainFields: ['browser', 'main', 'module'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: WebpackAliases
      },

      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  getCustomTransformers: () => ({
                    before: [createStyledComponentsTransformer()]
                  })
                }
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpe?g|gif|svg|woff(2)?)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  limit: 100000,
                  name: '[path][name].[contenthash].[ext]'
                }
              }
            ]
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: 'Stolentiq Studio',
          // favicon: `${WebpackAliases.src}/favicon.ico`,
          template: `${WebpackAliases.src}/index.ejs`,
          version: require(`${WebpackAliases.root}/package.json`).version,
          appleItunesApp: 'app-id=1524349119',
          inject: 'body',
          minify: {
            removeComments: true,
            collapseWhitespace: true
          },
          hash: true
        })
      ]
    }
  ]);
};
