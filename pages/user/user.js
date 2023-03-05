const app = getApp()
Page({
    data: {
        nList:[{
            name:'我的文章',
            ico:'icon\myarticals.ico',
            nav:'articals/articals',
        },{
            name:'我的地址',
            ico:'icon\mountain.png',
            nav:'adress/adress',
        },{
            name:'个人中心',
            ico:'',
            nav:'my/my',
        }]
    },

 //从数据库获取navList
    get_navList(){
    let that=this
        wx.cloud.database().collection("navList").get({ 
            success(res){
                console.log('请求成功',res)
                that.setData({
                    nList:res.data
                })                
            },
            fail(e){
                console.log('请求失败',res)
            }
        });
    },

    //点击跳转列表
    tap(res){
        console.log('点击成功',res.currentTarget.dataset.nav)
        wx.navigateTo({
          url: res.currentTarget.dataset.nav,
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    getInfo()
    {
        wx.getUserProfile({
          desc: '授权登陆',
          success(res){
            console.log('授权成功',res)
            app.globalData.userInfo = res.userInfo    
            
            wx.setStorageSync('userInfo', res.userInfo)
          }
        })
    },
    outInfo(){
        console.log(app.globalData.userInfo)
    },
    onLoad(options) {

        wx.onThemeChange((result) => {
            this.setData({
              theme: result.theme
            })
          })
        },
        onChooseAvatar(e) {
          const { avatarUrl } = e.detail 
          this.setData({
            avatarUrl,
          })
    },


    

})