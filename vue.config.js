const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})
const webpack = require("webpack")
// const px2rem = require('postcss-px2rem')
// const postcss = px2rem({
//     remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
//   })
module.exports = {

    // 配置插件参数
    configureWebpack: {
        plugins: [
            // 配置 jQuery 插件的参数
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    devServer: {
        // client: {
        //     webSocketURL: 'ws://0.0.0.0:6103/ws',
        //   },
        // host:'localhost',
        // open: true,
        // port: 8080,
        // allowedHosts:'all',
        // disableHostCheck: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置服务器跨域代理
            '/api': {
                target: 'http://127.0.0.1:8000/', //要跨域的地址
                // ws: true,
                changOrigin: true, //允许跨域
                // secure: false,// 接受运行在https上，默认不接受
                pathRewrite: {//重写路径
                    '^/api': '' //请求的时候使用这个api就可以
                }
            }
        }
    },
    //publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    //lintOnSave: true// 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    // css: {
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           postcss
    //         ]
    //       }
    //     }
    //   }
}
