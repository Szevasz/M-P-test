// app.js

App({
  
  onLaunch() {
    //云开发环境的初始化
    wx.cloud.init({
        env:"mountainsandplains-0dtyfc3126de0"
    })

    if(wx.getStorageSync('openid')){
        this.globalData.openid = wx.getStorageSync('openid')
    }

    if(wx.getStorageSync('userInfo')){
        this.globalData.userInfo = wx.getStorageSync('userInfo')
    }
    var that = this;
    wx.cloud.callFunction({
        name:'getUserOpenid',
        success(res){
            // console.log(res.result.openid)
            that.globalData.openid = res.result.openid
            wx.getStorageSync('openid',res.result.openid)
        }
    })
    },
    globalData: {
        userInfo:null,
        openid:null
      }
})
