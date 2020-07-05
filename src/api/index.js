// 登录
import login from './api_all/login'
// 首页
import home from './api_all/home'
// 用户中心
import user from './api_all/user'
// 钱包
import wallet from './api_all/wallet'
// 优惠卷0
import coupon from './api_all/coupon'
// 订单列表
import order from './api_all/order'
// 直播列表
import liveList from './api_all/liveList'
// 约看
import aboutToSee from './api_all/aboutToSee'


const api = {
    login,
    home,
    user,
    wallet,
    coupon,
    order,
    liveList,
    aboutToSee
}

export default api;