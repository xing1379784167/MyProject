const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    chainWebpack: (config)=>{
        /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end()
                config.plugins.delete('prefetch')
            }
        }
    },
    

    // configureWebpack: {
    //     　externals: {
    //     　　　　'echarts': 'echarts' // 配置使用CDN
    //     　}
    // }
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          config.plugins.push(
            new UglifyJsWebpackPlugin({
              uglifyOptions: {
                  compress: {
                      drop_debugger: true,
                      drop_console: true,  //生产环境自动删除console
                  },
                  warnings: false,
              },
              sourceMap: false,
              parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
          }),

          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，这里是10K以上的进行压缩
            deleteOriginalAssets: false // 是否删除原文件
          })
        
          )
           
             
          
        }
    }
        
}