const merge = require('webpack-merge');

const WebpackAliases = require('./aliases');
const baseConfiguration = require('./webpack.config.base');

const devConfiguration = () => {
  return merge([
    {
      mode: 'development',
      devtool: 'inline-source-map',

      devServer: {
        port: 6969,
        overlay: true,
        compress: true,
        progress: true,
        stats: 'errors-warnings',
        contentBase: `${WebpackAliases.root}/build`,
        historyApiFallback: {
          disableDotRule: true
        }
      },
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
      }
    }
  ]);
};

module.exports = (env) => {
  return merge(baseConfiguration(env), devConfiguration(env));
};
