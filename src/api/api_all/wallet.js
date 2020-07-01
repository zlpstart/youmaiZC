import request from '../request';
const wallet = {
    // 获取钱包数据
    getCoupon: data => request({url:"/account",method:'post',data}),
}

export default wallet;