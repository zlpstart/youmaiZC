import request from '../request';
const wallet = {
    // 获取钱包数据
    getCoupon: data => request({url:"/account",method:'post',data}),
    // 收支明细
    getwalletDerails:data => request({url:'/account/walletDetails',method:'post',data})
}

export default wallet;