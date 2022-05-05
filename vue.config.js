module.exports = {
  publicPath: process.env.BASE_URL,
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 500000,
      }
    }
  }
}