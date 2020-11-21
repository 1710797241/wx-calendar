Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: [
      {
        date: '2020-11-1'
      }, {
        date: '2020-11-2'
      },{
        date: '2020-11-4'
      },{
        date: '2020-11-5'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
  * 日历是否被打开
  */
  bindselect(e) {
    console.log(e.detail.ischeck)
  },
  /**
   * 获取选择日期
   */
  bindgetdate(e) {
    let time = e.detail;
    console.log(time)

  },
  bindgetchangemonth(e){
    let date = e.detail;
    console.log(date,'切换')

  }
  
})