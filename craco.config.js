const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@constants': resolvePath('./src/constants'),
      '@hooks': resolvePath('./src/hooks'),
      '@languages': resolvePath('./src/languages'),
      '@models': resolvePath('./src/models'),
      '@pages': resolvePath('./src/pages'),
      '@providers': resolvePath('./src/providers'),
      '@selectors': resolvePath('./src/selectors'),
      '@slices': resolvePath('./src/slices'),
      '@styles': resolvePath('./src/styles'),
      '@utils': resolvePath('./src/utils'),
    },
  },
}
