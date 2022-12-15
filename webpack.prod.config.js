const webpack = require('webpack');
const config = require('./webpack.base.config');
const path = require('path');

config.entry = './src/index.js';
config.mode = 'production';

config.output = {
    path: path.resolve('dist') + '/',
    filename: 'vue-ip.mine.js',
    library: 'VueIp',
    libraryTarget: 'umd',
};

module.exports = config;
