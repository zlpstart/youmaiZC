import request from '../request';
const attention = {
    // 获取关注数据
    getAttention: data => request({url:"/register",method:'post',data}),
}

export default attention;