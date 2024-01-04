import { config } from "../config/config";

class Http{
  static request({url,data,callback,method='GET'}) {
    wx.request({
      url,
      data,
      method,
      header:{
        appKey:config.appKey
      },
      success(res){
        callback(res.data)
      }
    })
  }
}

export {
  Http
}