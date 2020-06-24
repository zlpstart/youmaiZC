import request from '../request';
const api = {
    // 获取验证码
    getRegistersms: data => request({url:"/registersms",method:'post',data}),
    // 测试首页
    getIndex:() => request({url:'/index',method:'get'})
}

export default api;