// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const extraNodeModules = require('node-libs-react-native')

const projectRoot = __dirname
const workspaceRoot = path.resolve(__dirname, '../..')

const config = getDefaultConfig(projectRoot)

config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts, extraNodeModules },
  } = await getDefaultConfig(__dirname)

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      extraNodeModules: {
        ...extraNodeModules,
      },
      sourceExts: [...sourceExts, 'ts', 'tsx', 'js', 'jsx', 'json', 'cjs'],
      assetExts: [
        assetExts.filter((ext) => ext !== 'svg'),
        ...assetExts,
        'obj',
        'mtl',
        'JPG',
        'vrx',
        'hdr',
        'png',
        'jpeg',
        'gltf',
        'glb',
        'bin',
        'arobject',
        'gif',
        'svg',
        'ttf',
      ],
    },
  }
})()
