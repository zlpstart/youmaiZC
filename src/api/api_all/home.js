import request from '../request';
const home = {
    // 获取首页数据
    getHome: () => request({url:"/index",method:'post'}),
}

export default home;