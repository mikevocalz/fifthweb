module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      // https://expo.github.io/router/docs/intro#configure-the-babel-plugin
      require.resolve('expo-router/babel'),
      '@expo/html-elements/babel',
      '@babel/plugin-proposal-export-namespace-from',
      ['react-native-web', { commonjs: true }],
    ],
  }
}
