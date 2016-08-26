config/eslint.js

```
globals: ["pd"]
rules: {
  'operator-assignment': ['off', 'always']
}
```

config/webpack.config.dev.js

```
devtool: 'cheap-module-source-map'
loaders: [
  { test: /\.scss$/, loader: "style!css!sass" }
]
resolve: {
  root: [paths.appSrc]
}
```

config/babel.dev.js

```
plugins: [
  require.resolve("babel-plugin-transform-decorators-legacy"),
  require.resolve("babel-plugin-transform-export-extensions"),
]
```
