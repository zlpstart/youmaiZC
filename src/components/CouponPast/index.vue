<template>
  <div class="couponUnused">
    <div class="couponUnused_box" v-for="item in unCoupon" :key="item.id" v-show="unCoupon.length != 0">
      <div class="couponUnused_box_left">
        <h1>
          <span>¥</span>
          {{item.discount_price}}
        </h1>
        <p>{{item.remake}}</p>
      </div>
      <div class="couponUnused_box_right">
        <h1>{{item.discount_name}}</h1>
        <p>{{item.created_at}}</p>
      </div>
    </div>
    <div class="miss" v-show="unCoupon.length == 0">
      <img src="../../assets/img_quan.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "couponUnused",
  data() {
    return {

    };
  },
  props: ["unCoupon"]
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}

div.couponUnused {
  div.couponUnused_box {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    height: 200px;
    background: url("../../assets/img_quan_nor.png") no-repeat center;
    background-size: 100%;
    display: flex;
    opacity: 0.9;
    div.couponUnused_box_left {
      width: 240px;
      text-align: center;

      h1 {
        font-size: 52px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #aeaeae;
        line-height: 33px;
        margin-top: 62px;
        span {
          font-size: 24px;
        }
      }

      p {
        font-size: 22px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #aeaeae;
        line-height: 30px;
        margin-top: 20px;
      }
    }

    div.couponUnused_box_right {
      flex: 3;
      padding-left: 30px;
      h1 {
        font-size: 28px;
        margin-top: 59px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #aeaeae;
        line-height: 40px;
      }

      p {
        font-size: 20px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #aeaeae;
        line-height: 28px;
        margin-top: 31px !important;
      }
    }
  }
  .couponUnused_box:nth-child(1) {
    margin-top: 30px !important;
  }
}
</style>