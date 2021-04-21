module.exports = {
    publicPath: './',
    productionSourceMap: false,
    outputDir: 'zfjr',
    // assetsDir: 'zfjr',
    devServer: {
      // 端口配置
      port: 20006,
      // 反向代理配置
      proxy: {
          '/dist/terminal': {
              target: 'http://20.47.197.214:9015/decloud-terminalaccess/',
              changeOrigin: true, //改变源 如果接口跨域，需要进行这个参数配置
              pathRewrite: {
                  '^/dist/terminal': ''
              }
          },
      }
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
                resources: './src/assets/css/common.scss'
            })
            .end()
        })
      }
  }