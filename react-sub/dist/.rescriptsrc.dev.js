"use strict";

var _require = require('./package.json'),
    name = _require.name;

module.exports = {
  webpack: function webpack(config) {
    config.output.library = "".concat(name, "-[name]");
    config.output.libraryTarget = 'umd'; // config.output.jsonpFunction = `webpackJsonp_${name}`;

    config.output.chunkLoadingGlobal = "webpackJsonp_".concat(name);
    return config;
  },
  devServer: function devServer(_) {
    var config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    };
    config.historyApiFallback = true;
    config.hot = false; // config.watchContentBase = false;

    config.liveReload = false;
    return config;
  }
};