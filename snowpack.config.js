/** @type {import("snowpack").SnowpackUserConfig } */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      'snowpack-plugin-resize-images',
      {
        '**/images/**': {
          webp: {
            quality: 85
          },
          png: {
            quality: 85
          },
          jpeg: {
            quality: 85
          }
        }
      }
    ],
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: config => {
          config.plugins.push(new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: true
          }))

          return config
        }
      }
    ]
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  }
}
