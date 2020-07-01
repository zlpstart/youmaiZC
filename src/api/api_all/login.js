import request from '../request';
const api = {
    // 获取验证码
    getRegistersms: data => request({url:"/registersms",method:'post',data}),
    // 登录
    login:data => request({url:'/register',method:'post',data}),
}

export default api;
// 17366199394