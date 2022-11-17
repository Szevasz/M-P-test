// app.js

App({
  
  onLaunch() {
    //云开发环境的初始化
    wx.cloud.init({
        env:"cloud1-9go3l14v88d23c0d"
    })
    },
    globalData: {
        userInfo:null
      }
})
