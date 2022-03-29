const path = require('path')
const cracoLess = require('craco-less')
const compressionWebpackPlugin = require('compression-webpack-plugin')
const cracoPluginStyleResourcesLoader = require('craco-plugin-stylus-resources-loader')
const CracoStylusPlugin = require('craco-stylus')
const addPath = (dir) => path.join(__dirname, dir)
module.exports = {
  babel: {
    plugins: [
      //第一个 style 为 true ,需要配置 craco-less一起才能生效
      ['import', { libraryName: 'antd', style: true }]
    ]
  },
  plugins: [
    { plugin: CracoStylusPlugin },
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true
            //配置全局less 变量，不需要在使用的地方导入了
            // globalVars: {
            //   hack: `true; @import '~@/assets/style/variable.less';`
            // }
          }
        }
      }
    },
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: addPath('src/style/variable.styl'),
        /* 
              Please enter supported CSS processor type
              1. if u use css processor，please type css string
              2. if u use less processor，please type less string
              3. if u use sass or scss processor，please type sass or scss string，Choose one of the two
              4. if u use stylus processor，please type stylus string
          */
        styleType: 'stylus'
      }
    }
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    proxy: {
      '/api/': {
        target: 'http://172.31.164.23:11066/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  webpack: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.devtool = false
      webpackConfig.plugins.push(
        new compressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          // test: /\.js$|\.html$|\.json$|\.css/,
          test: /\.js$|\.json$|\.css/,
          threshold: 10240, // 只有大小大于该值的资源会被处理
          minRatio: 0.8 // 只有压缩率小于这个值的资源才会被处理
          // deleteOriginalAssets: true // 删除原文件
        })
      )
      webpackConfig.optimization = {
        splitChunks: {
          chunks: 'async',
          minSize: 40000,
          maxAsyncRequests: 5, // 最大异步请求数
          maxInitialRequests: 4, // 页面初始化最大异步请求数
          automaticNameDelimiter: '~', // 解决命名冲突
          // name: true值将会自动根据切割之前的代码块和缓存组键值(key)自动分配命名,否则就需要传入一个String或者function.
          name: true,
          cacheGroups: {
            common: {
              name: 'chunk-common',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|redux-saga|dva|react-router-dom|draft-js\/lib|core-js|@antv\/data-set\/build|)[\\/]/,
              priority: -10
            },
            antd: {
              name: 'chunk-antd',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](@ant-design|antd|moment|immutable\/dist|rc-calendar\/es|braft-finder\/dist|lodash|rc-tree\/es)[\\/]/,
              priority: -11
            },
            echarts: {
              name: 'chunk-echarts',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](echarts)[\\/]/,
              priority: 10
            }
          }
        }
      }

      // console.log(webpackConfig)
      // console.log('环境：', env, paths)
      return webpackConfig
    }
  }
}
