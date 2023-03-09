const { name } = require('./package.json')

module.exports = {
  publicPath: '/subapp/sub-vue',
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  // 打包输出格式: 打包成 umd 格式，为了让 qiankun拿到子应用 export的生命周期函数
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  },
  // 端口和跨域   qiankun通过fetch去获取子应用注册时配置的静态资源url，静态资源必须要支持跨域
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
