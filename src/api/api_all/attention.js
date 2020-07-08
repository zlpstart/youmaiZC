import request from '../request';
const attention = {
    // 获取关注数据
    getAttention: data => request({url:"/follow",method:'post',data}),
}

export default attention;