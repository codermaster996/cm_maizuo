// vue 项目的配置文件  覆盖

module.exports = {
  lintOnSave: false, // 暂时关闭代码格式检测

  // 配置反向代理
  devServer: {
    // Proxy: {
    //   '/api': {
    //     target: 'https://i.maoyan.com',
    //     changeOrigin: true
    //   }
    // }
    port: 8081,
    proxy: {
      //
      '/dashi': {
        target: 'https://i.maoyan.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/dashi': ''
        }
      }
    }
  }
}
