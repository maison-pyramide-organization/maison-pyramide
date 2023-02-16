const path = require('path')

module.exports = {
  reactStrictMode: false,
  images:{
    domains: ['datocms-assets.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
