// pages/community/community.js
var app=getApp()
Page({
    AddNew:function(){
        if(app.globalData.userInfo != null){
        wx.navigateTo({
            url: 'add',
         })
        }else{
            wx.showModal({
              confirmText: '收到',
              content: '请先授权登录',
              title: '提示',
              success: (result) => {},
              fail: (res) => {},
              complete: (res) => {},
            })
        }
    },

    data: {

    },

    onLoad(options) {

    },

    
})