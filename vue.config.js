module.exports = {
    publicPath: './',
    productionSourceMap: false,
    outputDir: 'zfjr',
    // assetsDir: 'zfjr',
    devServer: {
      // 端口配置
      port: 20006,
      open: true,
      // 反向代理配置
      proxy: {
          '/dist/terminalzf': {
              target: 'http://20.47.197.214:9015/decloud-terminalaccess/',
              changeOrigin: true,
              pathRewrite: {
                  '^/dist/terminalzf': ''
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