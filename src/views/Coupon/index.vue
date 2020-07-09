<template>
  <div class="coupon">
    <van-tabs v-model="active">
      <van-tab :title="title">
        <CouponUnused :coupon="coupon" />
      </van-tab>
      <van-tab :title="title2">
        <CouponFinish :isCoupon="isCoupon" />
      </van-tab>
      <van-tab :title="title3">
        <CouponPast :unCoupon="unCoupon" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CouponUnused from "../../components/CouponUnused/index";
import CouponFinish from "../../components/CouponFinish/index";
import CouponPast from "../../components/CouponPast/index";

export default {
  name: "coupon",
  data() {
    return {
      active: 0,
      coupon: [],
      isCoupon: [],
      unCoupon:[],
      title:'',
      title2:'',
      title3:''
    };
  },
  components: {
    CouponUnused,
    CouponFinish,
    CouponPast
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 未使用优惠券
      let para = {
        id: window.sessionStorage.getItem("userId"),
        status: 0
      };
      this.$api.coupon.getCoupon(para).then(res => {
        this.coupon = res.data.data
        this.title = `未使用(${res.data.data.length})`
      })
      // 已使用优惠券
      let para2 = {
        id: window.sessionStorage.getItem("userId"),
        status: 1
      };
      this.$api.coupon.getCoupon(para2).then(res => {
        this.isCoupon = res.data.data
        this.title2 = `已使用(${res.data.data.length})`
      })
      let para3 = {
        id: window.sessionStorage.getItem("userId"),
        status: 2
      }
      this.$api.coupon.getCoupon(para3).then(res => {
        this.unCoupon = res.data.data
        this.title3 = `已过期(${res.data.data.length})`
      })
    }
  }
};
</script>

<style scoped>
.coupon >>> .van-tabs__nav--line {
  height: 88px !important;
  overflow: hidden;
}
</style>