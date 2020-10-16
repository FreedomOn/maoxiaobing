
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarurl:'',
    username:'',
  },
  next:function(){
    console.log('userinfo', getApp().globalData.userInfo)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
 
    wx.showLoading({
      title: '加载中',
    })
    console.log(getApp().globalData.userInfo)
    let avatar = getApp().globalData.userInfo.avatarUrl;
    let name =  getApp().globalData.userInfo.nickName;
    this.setData({
      username:name,
      avatarurl:avatar
    })
    
    setTimeout( ()=>{
      wx.hideLoading()
    },1000)
  },
  Recharge:function(){
    wx.showToast({
      title: '充值',
      icon: 'success',
      duration: 2000
    })

  },
  Withdrawal:function(){
    wx.showToast({
      title: '体现',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})