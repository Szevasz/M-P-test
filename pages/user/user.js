const app = getApp()
Page({
    data: {

    },

    onLoad(options) {

    },

    getInfo()
    {
        wx.getUserProfile({
          desc: '获取头像昵称等信息体验完整功能',
          success(res){
            console.log('授权成功',res)
            app.globalData.userInfo = res.userInfo
            wx.navigateBack({
              success(res){
                  wx.showToast({
                    title: '授权成功',
                    })
                  }
             })       
          }
        })
    }
})