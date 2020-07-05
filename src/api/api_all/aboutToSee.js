import request from '../request';
const aboutToSee = {
    // 获取约看数据
    getAboutToSee: data => request({url:"/work",method:'post',data}),
}

export default aboutToSee;