/** @type {import("snowpack").SnowpackUserConfig } */
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
      {}
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
