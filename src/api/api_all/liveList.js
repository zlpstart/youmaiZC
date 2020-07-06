import request from '../request';
const liveList = {
    // 获取直播列表
    getliveList: () => request({ url: "/live", method: 'get' }),
    // 获取直播详情
    getDetails: (params) => request({ url: `/live/details`, method: 'get', params }),
    // 直播下单
    purchase: data => request({ url: `/live/order`, method: 'post', data }),
    // 直播订单支付
    alipay: data => request({ url: '/alipay', method: 'post', data })
}

export default liveList;