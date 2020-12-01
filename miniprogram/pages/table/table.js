// 将url分离出来

var app = getApp();
Page({
  data: {
    listData: []
  },

  openChatView: function (event) {
    // parseInt() 方法可将字符串转数字
    console.log("点击了第", parseInt(event.target.id) + 1, "条数据")
    wx.showModal({
      // cancelColor: 'cancelColor',
      title: '提示',
      content: '请确定物资已归还',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.request({
            url: app.globalData.host + "/api/updateBorrowGoods",
            method: "post",
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data: {
              "id": event.target.id
            },
            success: (res) => {
              // const data = res.data;
              // console.log("data",data)
              wx.showToast({
                title: '归还成功,请下拉刷新',
                icon: "success",
              })
            },
            fail: (res) => {
              wx.showToast({
                title: '网络异常,稍后再试',
                icon: "none"
              })
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

  onShow: function () {
    // 页面一出来就刷新
    const _this = this
    // console.log(app.globalData.host)
    wx.request({
      url: app.globalData.host + '/api/getBorrowGoods',
      success: (res) => {
        const data = res.data.data;
        // console.log("data",data)
        _this.setData({
          listData: data
        })
        // forEach 函数遍历data中的元素
        // data.forEach(function(item, index){
        //     var revertDate =item.revertDate
        //     if(revertDate.length==0){
        //         console.log("第",index+1,"个没有归还日期");
        //     }
        // else{
        //     console.log("第",index+1,"个归还日期为 ", revertDate)
        // }
        // })      


      },
      fail(res) {
        wx.showToast({
          title: '网络异常,稍后再试',
          icon: "none"
        })
      }

    })

  },
  onReachBottom: function (res) {
    console.log("上滑了页面")
    // wx.request({
    //   url: 'url',
    // })
  },
  onPullDownRefresh: function (res) {
    // 页面下拉处理逻辑
    wx.showNavigationBarLoading()
    const _this = this
    wx.request({
      url: app.globalData.host + '/api/getBorrowGoods',
      success: (res) => {
        const data = res.data.data;
        _this.setData({
          listData: data
        })

      },
      fail(res) {
        wx.showToast({
          title: '网络异常,稍后再试',
          icon: "none"
        })
      },
      complete:function(){
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      }
    })
  },
})