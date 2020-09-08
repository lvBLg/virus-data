const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  // proxy
  devServer: {
    proxy: {
      '/tianxing': {
        // target: 'https://sop-pae.baidu.com',
        target: 'http://api.tianapi.com/txapi',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/tianxing': ''
        }
      },
      '/apis': {
        target: 'https://api.yonyoucloud.com/apis',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
      '/aliyun': {
        target: 'https://ncovdata.market.alicloudapi.com/ncov/cityDiseaseInfoWithTrend',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/aliyun': ''
        }
      }
    }
  },
  // svg-icon
  chainWebpack: config => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
