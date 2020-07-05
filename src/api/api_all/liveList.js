import request from '../request';
const liveList = {
    // 获取直播列表
    getliveList: () => request({url:"/live",method:'get'}),
}

export default liveList;