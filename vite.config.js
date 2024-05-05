const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        carte: resolve(__dirname, 'carte.html'),
        history: resolve(__dirname, 'history.html'),
        map: resolve(__dirname, 'map.html'),
      }
    }
  }
}