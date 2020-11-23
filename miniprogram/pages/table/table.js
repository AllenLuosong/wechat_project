var home_cp = require("../../pages/home/home.js")
Page({  
    data: {
        // name:12,
        
    listData:[
    // {"code":"01","text":"text1","type":"type1","param":"value1"},
    // {"code":"02","text":"text2","type":"type2","param":"value2"},
    // {"code":"03","text":"text3","type":"type3","param":"value3"},
    // {"code":"04","text":"text4","type":"type4","param":"value4"},
    // {"code":"05","text":"text5","type":"type5","param":"value5"},
    // {"code":"06","text":"text6","type":"type6"},
    // {"code":"07","text":"text7","type":"type7"},
    ]
},
    onLoad: function () {
    console.log('onLoad') 
    const _this = this
    wx.request({
      url: 'http://127.0.0.1:5000/api/getBorrowGoods',
          success: (res)=>{
            // console.log("res",res)
            const data = res.data.data;
            // console.log("list",data)
            _this.setData({
                listData:data
                
            })
        }
      
    })

    }
})