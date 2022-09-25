const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/car':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/car':''
        }

      }
    }
  }
})
