import request from '../request';
const order = {
    // 获取订单详情
    getOrder: data => request({url:"/order",method:'post',data})
}

export default order;