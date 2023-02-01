const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'solito',
  'moti',
  'nativewind',
  'app',
  'dripsy',
  '@dripsy/core',
  '@expo/vector-icons',
  'nativewind',
  '@mobily/stacks',
  'react-native-web',
  'react-native-svg',
  '@expo/html-elements',
  'react-native-webview',
  '@sanity/image-url',
  'expo-linear-gradient',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  webpack5: true,
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]],
  },
  images: {
    disableStaticImages: true,
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
    const { alias = {}, extensions } = config.resolve

    config.resolve.alias = {
      ...alias,
      'react-native$': 'react-native-web',
    }

    config.resolve.extensions = extensions.concat([
      '.web.js',
      '.web.ts',
      '.web.tsx',
    ])

    return config
  },
}

module.exports = withPlugins(
  [withTM, withExpo, withFonts, withImages],
  nextConfig
)
