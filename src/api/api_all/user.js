import request from '../request';
const user = {
    // 获取优惠券
    getDiscounts: data => request({url:"/discount",method:'post',data}),
    // 获取余额
    getMoney:data => request({url:'/account',method:'post',data}),
    // 获取用户信息、
    getUserData:() => request({url:'/my',method:'get'})
}

export default user;