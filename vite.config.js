const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  publicDir: "../public",
  server: {
    port: 8080,
    hot: true
  }
}