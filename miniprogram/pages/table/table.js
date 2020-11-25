
// 将url分离出来
var host = 'http://127.0.0.1:5000';
Page({  
    data: {
        listData:[
    ]
},
        onShow: function () {
    // 页面一出来就刷新
    const _this = this
    wx.request({
      url: host+'/api/getBorrowGoods',
          success: (res)=>{
            // console.log("res",res)
            const data = res.data.data;
            // console.log("list",data)
            _this.setData({
                listData:data
            })
        },
        fail(res){
            wx.showToast({
              title: '网络异常,稍后再试',
              icon:"none"
            })
        }
      
    })

    }
})