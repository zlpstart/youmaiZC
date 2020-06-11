<template>
  <div class="paymenterr">
    <div class="paymenterr_logo">
      <img src="../../assets/icon_pay_failed.png" alt />
    </div>
    <div class="paymenterr_title">
      <h1>很遗憾，预订失败了</h1>
    </div>
    <div class="paymenterr_content">
      <p>该订单会为您保留30分钟，30分钟之后如果还未成功付款，系统将自动取消该订单，如需帮助，请联系有麦客服</p>
    </div>
    <div class="paymenterr_button1" @click="toPayment">重新支付</div>
    <div class="paymenterr_button2">联系客服</div>
  </div>
</template>

<script>
export default {
  name: "paymenterr",
  methods:{
      toPayment(){
          this.$router.push('/payment')
      }
  }
};
</script>

<style lang="less" scoped>
div.paymenterr {
  padding: 90px 30px 0 30px;
  div.paymenterr_logo {
    width: 126px;
    height: 126px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.paymenterr_title {
    margin-top: 50px;
    h1 {
      font-size: 42px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 59px;
      text-align: center;
    }
  }

  div.paymenterr_content {
    width: 643px;
    margin: auto;
    margin-top: 30px;
    p {
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 33px;
    }
  }
  div.paymenterr_button1 {
    width: 630px;
    height: 88px;
    background: rgba(250, 151, 2, 1);
    border-radius: 6px;
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;
    margin: auto;
    margin-top: 114px;
  }
  .paymenterr_button2 {
    width: 630px;
    height: 88px;
    border-radius: 6px;
    border: 1px solid rgba(250, 151, 2, 1);
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(250, 151, 2, 1);
    line-height: 88px;
    text-align: center;
    margin-top: 30px;
    margin: 30px auto;
  }
}
</style>