<template>
  <div class="coupon">
    <van-tabs v-model="active">
      <van-tab title="未使用(3)">
          <CouponUnused />
      </van-tab>
      <van-tab title="已使用(3)">
          <CouponFinish />
      </van-tab>
      <van-tab title="已过期(3)">
          <CouponPast />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CouponUnused from '../../components/CouponUnused/index'
import CouponFinish from '../../components/CouponFinish/index'
import CouponPast from '../../components/CouponPast/index'

export default {
  name: "coupon",
  data() {
    return {
      active: 0
    };
  },
  components:{
      CouponUnused,
      CouponFinish,
      CouponPast
  },
  mounted(){
    console.log('youhuijuan')
    let para = {
      id: window.sessionStorage.getItem("userId")
    };
    this.$api.coupon.getCoupon(para).then(res => console.log(res))
  }
};
</script>

<style scoped>
.coupon >>> .van-tabs__nav--line {
  height: 88px !important;
  overflow: hidden;
}
</style>