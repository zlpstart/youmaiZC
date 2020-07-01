import request from '../request';
const coupon = {
    // 获取优惠卷数据
    getCoupon: data => request({url:"/discount",method:'post',data}),
}

export default coupon;