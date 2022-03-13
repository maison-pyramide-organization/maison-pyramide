const path = require('path')

module.exports = {
  reactStrictMode: false,
  images:{
    domains: ['www.datocms-assets.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
