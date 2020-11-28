
// 将url分离出来
var host = 'http://127.0.0.1:5000';
Page({  
    data: {
        listData:[]
},
    
    openChatView:function (event){
        console.log("哈哈哈")
    },

        onShow: function () {
    // 页面一出来就刷新
    const _this = this
    
    wx.request({
      url: host+'/api/getBorrowGoods',
          success: (res)=>{
            const data = res.data.data;
            // forEach 函数遍历data中的元素
            data.forEach(function(item, index){
                var revertDate =item.revertDate
                if(revertDate.length==0){
                    console.log("第",index+1,"个没有归还日期");
                }
                else{
                    console.log("第",index+1,"个归还日期为 ", revertDate)
                }
            })      
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

    },
    onReachBottom:function (res) {
        console.log("上滑了页面")
        // wx.request({
        //   url: 'url',
        // })
    }

})