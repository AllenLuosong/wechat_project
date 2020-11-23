// miniprogram/pages/home/home.js
import { getData } from "../util/request.js";
// 编程范式 1 命令式编程 2 声明式编程
Page({

    /**
     * 页面的初始数据
     */
    data: {
        get_title:["借用人", "借用日期", "借用物资", "归还日期"],
        get_res: [],
        name: "code",
        time: (new Date()).toString(),
        age:18,
        students:[
            {id:110,name:"kobe",age:"30"},
            {id:111,name:"culo",age:"33"},
            {id:112,name:"all",age:"31"},
        ],
        counter:0

    },
    handleBtnClick(){
        // 界面是不会刷新的
        // this.data.counter+=1,
        // console.log(this.data.counter+=1)
        this.setData({
            counter:this.data.counter+=1
        })
    },
    handsubBtnClick(){
         this.setData({
            counter:this.data.counter-=1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {


        var that = this;
        //调用封装的方法，为了方便我直接在页面加载的时候执行这个方法
        getData('api/getBorrowGoods', this.shuffleSuc, this.fail);
        // console.log(data.data)
      },
      shuffleSuc: function (data) {
        var that = this;
        that.setData({
            // 这里返回接口内容
            // for (index in data.data[index]) {
            //     title : res.data[index].title
            //  }
            
            get_res: data.data[0].借用人+data.data[0].借用日期+data.data[0].借用物资+data.data[0].归还日期
          
        //   get_res: data.msg_code
        })
        //我后面测试了一下，直接this.setData也可以，但是因为我在没有使用封装方法的时候
        //this.setData报过错，不能直接用this，所以我在赋值的时候一般都会加上var that = this;
        //这句话算是一个不是习惯的习惯
      },
      fail: function () {
        console.log("失败")
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