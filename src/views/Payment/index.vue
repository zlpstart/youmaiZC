<template>
  <div class="payment">
    <div class="payment_top">
      <h1>¥ 1250.00</h1>
      <p>支付剩余时间29：59</p>
    </div>
    <div class="payment_list">
      <van-radio-group v-model="radio">
        <van-radio name="1" icon-size="24px">
          <img src="../../assets/img_vip.png" alt />
          <p>会员支付</p>
        </van-radio>
        <van-radio name="2" icon-size="24px">
          <img src="../../assets/img-weixin.png" alt />
          <p>微信支付</p>
        </van-radio>
        <van-radio name="3" icon-size="24px">
          <img src="../../assets/icon-zhifubao-nor@3x.png" alt />
          <p>支付宝支付</p>
        </van-radio>
        <van-radio name="4" icon-size="24px">
          <img src="../../assets/logo-header.png" alt />
          <p>快钱支付</p>
        </van-radio>
      </van-radio-group>
    </div>
    <div class="payment_btn" @click="confirm">确认支付</div>
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      radio: "1"
    };
  },
  methods:{
      confirm(){
          this.$router.push("/havePaid")
      }
  }
};
</script>

<style lang="less" scoped>
div.payment {
  text-align: center;
  div.payment_top {
    padding: 50px;
    height: 217px;
    h1 {
      font-size: 34px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 48px;
    }

    p {
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 33px;
    }
  }

  div.payment_list {
    padding: 0 30px;
  }
  .payment_btn {
    width: 690px;
    height: 88px;
    background: rgba(250, 151, 2, 1);
    border-radius: 6px;
    position: absolute;
    bottom: 21px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
  }
}
</style>