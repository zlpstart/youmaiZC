import request from '../request';
const liveList = {
    // 获取直播列表
    getliveList: () => request({ url: "/live", method: 'get' }),
    // 获取直播详情
    getDetails: (params) => request({ url: `/live/details`, method: 'get', params }),
    // 直播下单
    purchase: data => request({ url: `/live/order`, method: 'post', data }),
    // 获取预约时间
    getLiveTime:data => request({url:`/live/gettime`,method:'post',data}),
    // 直播订单支付
    alipay: data => request({ url: '/alipay', method: 'post', data }),
    // 支付密码确认
    postPassWord:data => request({url:'/account/checkpwd',method:'post',data}),
    // 直播订单支付
    payPass:data => request({url:'/live/pay',method:'post',data})
}

export default liveList;