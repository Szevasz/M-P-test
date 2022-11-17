// pages/community/add.js
var app=getApp()

Page({

    data: {
    cloudImgList:[]
    },

    onLoad:function(options) {
        console.log(app.globalData.userInfo)
    },
    getValue(e){
        console.log(e.detail.value)
        this.setData({
            inputValue:e.detail.value
        })
    },
    // chooseImage(){
    //     wx.chooseMedia({
    //         count: 9,
    //         mediaType: ['image','video'],
    //         sourceType: ['album', 'camera'],
    //         maxDuration: 30,
    //         camera: 'back',
    //         success(res) {
    //             var PhotoNum = res.tempFiles.length
    //             for(let i=0;i<PhotoNum;i++){
    //                 console.log(res.tempFiles[i].tempFilePath)
    //             }
    //         //上传图片
    //       }
    //     })
    // }
    chooseImage(){
        var that = this
        wx.chooseImage({
            count: 9,
            mediaType: ['image','video'],
            sourceType: ['album', 'camera'],
            success(res) {
                console.log(res)
                console.log(res.tempFilePaths)
            //上传图片
            that.data.tempImgList = res.tempFilePaths
            that.uploadImages()
          }
        })
    },
    uploadImages(){
        var that = this;
        for (var i = 0;i < this.data.tempImgList.length;i++){
            wx.cloud.uploadFile({
                cloudPath:`actionImages/${Math.random()}_${Date.now()}.${this.data.tempImgList[i].match(/\.(\w+)$/)[1]}`, //随机命名和格式解析
                filePath:this.data.tempImgList[i],
                success(res){
                    console.log(res.fileID)
                    that.data.cloudImgList.push(res.fileID)
                    that.setData({
                        cloudImgList:that.data.cloudImgList
                    })
                }
            })
        }
    }
})