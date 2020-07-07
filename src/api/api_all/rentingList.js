import request from '../request';
const rentingList = {
    // 获取租房列表
    getRentingList: () => request({ url: "/space", method: 'get' }),
    // 获取租房详情
    getDetails: (params) => request({ url: `/space/details`, method:'get',params}),
    // 租房预约
    subscribe: data => request({ url: `/space/order`, method: 'post',data}),
    // 获取租房时间
    getTime: data => request({ url: `/space/gettime`, method: 'post',data}),
}

export default rentingList;