const merge = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfiguration = require('./webpack.config.base');

const prodConfiguration = (env) => {
    return merge([
        {
            mode: 'production',
            devtool: false,
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
                },
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        cache: true,
                        parallel: true
                    })
                ]
            },
            plugins: [
                new CleanWebpackPlugin(),
                new CompressionPlugin(),
            ]
        }
    ]);
};

module.exports = (env) => {
    return merge(baseConfiguration(env), prodConfiguration(env));
};