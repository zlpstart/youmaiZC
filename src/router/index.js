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
  {
    path: '/rentingList',
    name: 'rentingList',
    component: resolve => (require(["@/views/RentingList/index.vue"], resolve))
  },
  {
    path: '/RentingDetails',
    name: 'RentingDetails',
    component: resolve => (require(["@/views/RentingDetails/index.vue"], resolve))
  },
  {
    path: '/liveList',
    name: 'liveList',
    component: resolve => (require(["@/views/LiveList/index.vue"], resolve))
  },
  {
    path: '/liveDetails',
    name: 'liveDetails',
    component: resolve => (require(["@/views/LiveDetails/index.vue"], resolve))
  },
  {
    path: '/appointment/:type',
    name: 'appointment',
    component: resolve => (require(["@/views/Appointment/index.vue"], resolve))
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: resolve => (require(["@/views/OrderForm/index.vue"], resolve))
  },
  {
    path: '/payment',
    name: 'payment',
    component: resolve => (require(["@/views/Payment/index.vue"], resolve))
  },
  {
    path: '/paymenterr',
    name: 'paymenterr',
    component: resolve => (require(["@/views/PaymentERR/index.vue"], resolve))
  },
  {
    path: '/paymentsucceed',
    name: 'paymentsucceed',
    component: resolve => (require(["@/views/PaymentSucceed/index.vue"], resolve))
  },
  {
    path: '/havePaid',
    name: 'havePaid',
    component: resolve => (require(["@/views/HavePaid/index.vue"], resolve))
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => (require(["@/views/Login/index.vue"], resolve))
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: resolve => (require(["@/views/Wallet/index.vue"], resolve))
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: resolve => (require(["@/views/Coupon/index.vue"], resolve))
  },
  {
    path: '/attention',
    name: 'attention',
    component: resolve => (require(["@/views/Attention/index.vue"], resolve))
  },
  {
    path: '/indent',
    name: 'indent',
    component: resolve => (require(["@/views/Indent/index.vue"], resolve))
  },
  {
    path: '/aboutToSee',
    name: 'aboutToSee',
    component: resolve => (require(["@/views/AboutToSee/index.vue"], resolve))
  },
  {
    path: '/about',
    name: 'about',
    component: resolve => (require(["@/views/About/index.vue"], resolve))
  },
  {
    path: '/detail',
    name: 'detail',
    component: resolve => (require(["@/views/Detail/index.vue"], resolve))
  },
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
