//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }]
  },
//-----------------------------------------------------------------
  data: {
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    }
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
//-----------------------------------------------------------------
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    });
    console.log("logs page execute: onLoad.");
  },
  onReady: function () {
    console.log("logs page execute: onReady.");
  },
  onShow: function () {
    // Do something when page show.
    console.log("logs page execute: onShow.");
    console.log(app.globalData.userInfo);
  },
  onHide: function () {
    // Do something when page hide.
    // 可以在这里处理一些当用户切到后台时的逻辑，比如保存当前的训练进度之类的
    console.log("logs page execute: onHide.");
  },
  onUnload: function () {
    // Do something when page close.
    console.log("logs page execute: onUnload.");
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("logs page execute: onPullDownRefresh.");
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log("logs page execute: onReachBottom.");
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  viewTap: function () {
    console.log('view tap')
  }
})