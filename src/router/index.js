import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/homeWrap',
    component: resolve => (require(["@/views/Home/index.vue"], resolve)),
    children: [
      {
        path: '/homeWrap',
        name: 'homeWrap',
        component: resolve => (require(["@/views/HomeWrap/index.vue"], resolve))
      },
      {
        path: '/serve',
        name: 'serve',
        component: resolve => (require(["@/views/Serve/index.vue"], resolve))
      },
      {
        path: '/service',
        name: 'service',
        component: resolve => (require(["@/views/Service/index.vue"], resolve))
      },
      {
        path: '/user',
        name: 'user',
        component: resolve => (require(["@/views/User/index.vue"], resolve))
      },
    ]
  },
  // 租房列表
  {
    path: '/rentingList',
    name: 'rentingList',
    component: resolve => (require(["@/views/RentingList/index.vue"], resolve))
  },
  // 租房详情
  {
    path: '/RentingDetails',
    name: 'RentingDetails',
    component: resolve => (require(["@/views/RentingDetails/index.vue"], resolve))
  },
  // 直播列表
  {
    path: '/liveList',
    name: 'liveList',
    component: resolve => (require(["@/views/LiveList/index.vue"], resolve))
  },
  // 直播详情
  {
    path: '/liveDetails',
    name: 'liveDetails',
    component: resolve => (require(["@/views/LiveDetails/index.vue"], resolve))
  },
  // 预定
  {
    path: '/appointment/:type',
    name: 'appointment',
    component: resolve => (require(["@/views/Appointment/index.vue"], resolve))
  },
  // 订单支付
  {
    path: '/orderform',
    name: 'orderform',
    component: resolve => (require(["@/views/OrderForm/index.vue"], resolve))
  },
  // 付款页面
  {
    path: '/payment',
    name: 'payment',
    component: resolve => (require(["@/views/Payment/index.vue"], resolve))
  },
  // 预定失败
  {
    path: '/paymenterr',
    name: 'paymenterr',
    component: resolve => (require(["@/views/PaymentERR/index.vue"], resolve))
  },
  // 预定成功
  {
    path: '/paymentsucceed',
    name: 'paymentsucceed',
    component: resolve => (require(["@/views/PaymentSucceed/index.vue"], resolve))
  },
  // 订单已支付
  {
    path: '/havePaid',
    name: 'havePaid',
    component: resolve => (require(["@/views/HavePaid/index.vue"], resolve))
  },
  // 登录页面 
  {
    path: '/login',
    name: 'login',
    component: resolve => (require(["@/views/Login/index.vue"], resolve))
  },
  // 我的钱包
  {
    path: '/wallet',
    name: 'wallet',
    component: resolve => (require(["@/views/Wallet/index.vue"], resolve))
  },
  // 优惠券
  {
    path: '/coupon',
    name: 'coupon',
    component: resolve => (require(["@/views/Coupon/index.vue"], resolve))
  },
  // 没有关注
  {
    path: '/attention',
    name: 'attention',
    component: resolve => (require(["@/views/Attention/index.vue"], resolve))
  },
  // 我的订单
  {
    path: '/indent',
    name: 'indent',
    component: resolve => (require(["@/views/Indent/index.vue"], resolve))
  },
  // 我的约看
  {
    path: '/aboutToSee',
    name: 'aboutToSee',
    component: resolve => (require(["@/views/AboutToSee/index.vue"], resolve))
  },
  // 关于我们
  {
    path: '/about',
    name: 'about',
    component: resolve => (require(["@/views/About/index.vue"], resolve))
  },
  // 账单
  {
    path: '/detail',
    name: 'detail',
    component: resolve => (require(["@/views/Detail/index.vue"], resolve))
  },
  // 用户服务协议
  {
    path: '/serveAgreement',
    name: 'serveAgreement',
    component: resolve => (require(["@/views/ServeAgreement/index.vue"], resolve))
  },
  // 押金
  {
    path: '/guarantee',
    name: 'guarantee',
    component: resolve => (require(["@/views/Guarantee/index.vue"], resolve))
  },
  // 最少起订
  {
    path: '/minimum',
    name: 'minimum',
    component: resolve => (require(["@/views/Minimum/index.vue"], resolve))
  },
  // 入驻
  {
    path: '/enter',
    name: 'enter',
    component: resolve => (require(["@/views/Enter/index.vue"], resolve))
  },
  // 平台协议
  {
    path: '/platformAgreement',
    name: 'platformAgreement',
    component: resolve => (require(["@/views/PlatformAgreement/index.vue"], resolve))
  },
  // 更多图标
  {
    path: '/more',
    name: 'more',
    component: resolve => (require(["@/views/More/index.vue"], resolve))
  },
  // 退订政策
  {
    path: '/unsubscribe',
    name: 'unsubscribe',
    component: resolve => (require(["@/views/Unsubscribe/index.vue"], resolve))
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  console.log(to)
  let isLogin = window.sessionStorage.getItem("key")
  if(to.path == '/login'){
    next()
  }else if(isLogin){
    next()
  }else {
    next("/login")
  }
})


export default router
