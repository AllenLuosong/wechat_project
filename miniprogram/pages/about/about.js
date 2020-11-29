// miniprogram/pages/about/about.js


Page({      

  /**
   * 页面的初始数据
   */
  data: {
    pictureList: [],
    time: (new Date()).toLocaleDateString(),
    array: ['请点击选择', 'OPPO_Ren3 pro', 'RedMi_k30', 'G5','SIM卡'],
    objectArray: [{
        id: 0,
        name: '请点击选择'
      },
      {
        id: 1,
        name: 'OPPO_Ren3 pro'
      },
      {
        id: 2,
        name: 'RedMi_k30'
      },
      {
        id: 3,
        name: 'G5'
      },
      {
        id:4,
        name:'SIM卡'
      }
    ],
    index: 0,
  },

 // 向buyerBasics添加数据
 addBuyerBasics:function(res){
  var submitData = res.detail.value
  // console.log("submitData.borrowName "+submitData.borrowName)
  // console.log("submitData.goodName "+submitData.goodName)
  if (Object.keys(submitData.borrowName).length === 0 | Object.keys(submitData.goodName).length === 0 ){
    wx.showToast({
      title: '物资和借用人不能为空',
      icon:"none",
      duration: 2000
    })
    return
  }
    wx.request({
      url: 'http://127.0.0.1:5000/api/postBorrowGoods',
      method:"post",
      data:{
        borrowname:""+submitData.borrowName,
        borrowgoods:""+submitData.goodName,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res){
          // console.log("res.data "+res.data)
          if(res.data="请求成功"){
            wx.showToast({
              title: '提交成功',
              icon:"sucess",
              duration: 2000
            })
          }
          else{
            console.log("提交失败")
          }
        },
        fail(res){
          wx.showToast({
            title: '网络异常,稍后再试',
            icon:"none"
          })
        }
    })
},
  bindPickerChange: function (e) {
    console.log("当前选择 "+this.data.objectArray[e.detail.value].name)
    this.setData({
      index: e.detail.value
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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