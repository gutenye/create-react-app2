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
resolve: {
  root: [paths.appSrc]
}
```
