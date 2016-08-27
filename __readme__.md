config/eslint.js

```
rules: {
  'operator-assignment': ['off', 'always']
  'no-redeclare': 'off'
  'no-unused-vars': ['off', { vars: 'local', args: 'none' }]
  'no-undef': 'off',
  'no-return-assign': 'off'
  'no-throw-literal': 'off',
  'react/no-direct-mutation-state': 'off',
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
