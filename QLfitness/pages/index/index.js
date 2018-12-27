//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    month:"",
    navs: [],
    list: [],
    imgs: [
      { id: 1, icon_url: "/pages/static/icons/grid-01.png", title: "最新活动" },
      { id: 2, icon_url: "/pages/static/icons/grid-02.png", title: "当月课程" },
      { id: 3, icon_url: "/pages/static/icons/grid-03.png", title: "明星学员" },
      { id: 4, icon_url: "/pages/static/icons/grid-04.png", title: "VIP尊享" },
      { id: 5, icon_url: "/pages/static/icons/grid-05.png", title: "健身环境" },
      { id: 6, icon_url: "/pages/static/icons/grid-06.png", title: "学员合影" },
      { id: 7, icon_url: "/pages/static/icons/grid-07.png", title: "人才招聘" },
      { id: 8, icon_url: "/pages/static/icons/grid-08.png", title: "关于强力" }
    ]
  },
  nav(e){
    var index=e.target.dataset.index;
    if(index==1){
      wx.reLaunch({
        url: '/pages/activity/activity',
      })
    } else if (index == 2){
      wx.navigateTo({
        url: '/publicpage/kecheng/kecheng',
      })
    } else if (index == 3) {
      wx.pageScrollTo({
        scrollTop:550,
        duration: 300
      })
    }
    else if (index == 8){
      wx.reLaunch({
        url: '/pages/about/about',
      })
    }
    else{
      wx.showToast({
        title: '该功能尚未实现',
        icon:'loading',
        duration:1000,
      })
      setTimeout(function(){
        wx.hideToast({})
      },1000)
      
    }
   // wx.reLaunch({ url:'pages/activity/activity' })
  },
  onLoad: function () {
   wx.request({
     url: 'http://127.0.0.1:3000/imglist',
     success:(res)=>{
       var rows = this.data.list.concat(//拼接数组内数据
         res.data
       )
       this.setData({ list: rows});
       }
     
   })
   var month = new Date().getMonth() + 1;
    this.setData({ month })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
