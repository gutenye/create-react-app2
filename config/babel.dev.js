// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end

var path = require('path');

module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  // This is a feature of `babel-loader` for webpack (not Babel itself).
  // It enables caching results in OS temporary directory for faster rebuilds.
  cacheDirectory: true,
  presets: [
    // Latest stable ECMAScript features
    require.resolve('babel-preset-latest'),
    // JSX, Flow
    require.resolve('babel-preset-react')
  ],
  plugins: [
    require.resolve("babel-plugin-transform-export-extensions"),
    require.resolve("babel-plugin-transform-decorators-legacy"),
    [require.resolve('babel-plugin-antd'), {style: 'css', libraryName: 'antd-mobile'}],
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // { ...todo, completed: true }
    require.resolve('babel-plugin-transform-object-rest-spread'),
    // function* () { yield 42; yield 43; }
    [require.resolve('babel-plugin-transform-regenerator'), {
      // Async functions are converted to generators by babel-preset-latest
      async: false
    }],
    // Polyfills the runtime needed for async/await and generators
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      // You can safely remove this after ejecting:
      moduleName: path.dirname(require.resolve('babel-runtime/package'))
    }],
  ]
};
