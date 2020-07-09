<template>
  <div class="couponUnused">
    <div class="couponUnused_box" v-for="item in coupon" :key="item.id" v-show="coupon.length != 0">
      <div class="couponUnused_box_left">
        <h1>
          <span>¥</span>
          {{item.discount_price}}
        </h1>
        <p>{{item.remake}}</p>
      </div>
      <div class="couponUnused_box_right">
        <h1>{{item.discount_name}}</h1>
        <p>
          {{item.created_at}}
          <van-radio-group v-model="radio" v-show="$route.path == '/orderform' ">
            <van-radio name="1" icon-size="24px">
              <p>2020-06-01至2020-06-25</p>
              <img slot="icon" src="../../assets/yes.png" alt />
            </van-radio>
          </van-radio-group>
        </p>
      </div>
    </div>
    <div class="miss" v-show="coupon.length == 0">
      <img src="../../assets/img_quan.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "couponUnused",
  data() {
    return {
      radio: "1"
    };
  },
  mounted() {

  },
  props:["coupon"]
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
    background: url("../../assets/img_quan_press.png") no-repeat center;
    background-size: 100%;
    display: flex;
    div.couponUnused_box_left {
      width: 240px;
      text-align: center;

      h1 {
        font-size: 52px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(250, 151, 2, 1);
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
        color: rgba(153, 153, 153, 1);
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
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
      }

      p {
        font-size: 20px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 28px;
        margin-top: 31px;
        input {
          width: 36px;
          height: 36px;
          border: 1px solid #c7c7c7;
          float: right;
          margin-right: 20px;
        }
      }
    }
  }
  .couponUnused_box:nth-child(1) {
    margin-top: 30px !important;
  }
}
</style>

<style scoped>
.couponUnused >>> .van-radio {
  height: 50px;
  margin-left: 0;
  margin-top: -18px;
  padding-right: 30px !important;
}
.couponUnused >>> .van-radio__label p {
  margin-left: 0;
  margin-top: 0px !important;
}
.couponUnused >>> .van-radio__label {
  margin-left: 0;
}
</style>