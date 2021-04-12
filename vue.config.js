module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
      // 端口配置
      port: 20006,
      // 反向代理配置
      proxy: {
          '/v-web': {
              target: 'http://127.0.0.1:8778/',
              // target: 'http://179.10.8.7:9001/',
              changeOrigin: true, //改变源 如果接口跨域，需要进行这个参数配置
              pathRewrite: {
                  '^/v-web': ''
              }
          },
      }
    }
  }