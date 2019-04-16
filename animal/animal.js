// judge/judge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data:"",
        photos:"",
        score:""
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onLoad: function (options) {
        var that = this
        that.setData({
            photos:options.photos
        })
        wx.showLoading({
            title: "努力分析中...",
            mask: true
        })
        wx.uploadFile({
            url: 'https://kuan.mynatapp.cc/upload', //仅为示例，非真实的接口地址
            filePath: that.data.photos,
            name: 'file',
            formData: {
                'user': '李自宽'
            },
            success: function (res) {
                var data = JSON.parse(res.data);
                var sco =Number(data[0].score*100).toFixed(2);
                sco+="%";
                console.log(sco);
                console.log(data);
                wx.hideLoading();
                that.setData({
                    data: data,
                    score: sco,
                })     
            }    
        })
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