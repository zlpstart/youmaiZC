import request from '../request';
const setPass = {
    // 获取订单详情
    setPass: data => request({url:"/my/paypass",method:'post',data})
}

export default setPass;