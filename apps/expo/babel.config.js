module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      'nativewind/babel',
      '@expo/html-elements/babel',
      '@babel/plugin-proposal-export-namespace-from',
    ],
  }
}
