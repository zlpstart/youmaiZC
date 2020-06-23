<template>
  <div class="wallet">
    <div class="wallet_top">
      <div class="wallet_top_p">
        <p>当前可用余额（元）</p>
      </div>
      <div class="wallet_top_h1">
        <h1>¥300，000.00</h1>
      </div>
      <div class="wallet_top_btn">
        <button @click="toDetail">收支明细</button>
      </div>
    </div>
    <div class="wallet_refill padd">
      <div class="wallet_refill_title">
        <h1>充值金额</h1>
      </div>
      <div class="wallet_refill_wrap">
        <div
          :class="{wallet_refill_wrap_box:true,target_bac:item.target}"
          v-for="item in money"
          :key="item.mach"
          @click="xuan(item)"
        >
          <p>{{item.mach}}元</p>
          <h1 v-show="item.song">
            送
            <span>100</span>元
          </h1>
        </div>
      </div>
    </div>
    <div class="wallet_payment padd">
      <div class="wallet_payment_title">
        <h1>选择支付方式</h1>
      </div>
      <div class="wallet_payment_li">
        <div class="payment_list">
          <van-radio-group v-model="radio">
            <van-radio name="1" icon-size="24px">
              <img src="../../assets/img-weixin.png" alt />
              <p>微信支付</p>
              <img slot="icon" src="../../assets/yes.png" alt="">
            </van-radio>
            <van-radio name="2" icon-size="24px">
              <img src="../../assets/icon-zhifubao-nor@3x.png" alt />
              <p>支付宝支付</p>
              <img slot="icon" src="../../assets/yes.png" alt="">
            </van-radio>
            <van-radio name="3" icon-size="24px">
              <img src="../../assets/logo-header.png" alt />
              <p>快钱支付</p>
              <img slot="icon" src="../../assets/yes.png" alt="">
            </van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="wallet_hint padd">
      <div class="wallet_hint_left">
        <img src="../../assets/wallet_icon_jinggao_nor.png" alt />
      </div>
      <div class="wallet_hint_right">
        <p>
          点击立即充值，代表您同意
          <span>《充值活动协议》</span>
        </p>
      </div>
    </div>
    <div class="wallet_affirm padd">
      <div class="wallet_affirm_left">
        <p>共计</p>
        <h1>¥5000.00</h1>
      </div>
      <div class="wallet_affirm_right" @click="recharge">立即充值</div>
    </div>
    <!-- 充值成功 -->
    <div class="wallet_alert" v-show="succeed">
      <div class="wallet_alert_box">
        <div class="wallet_alert_box_top">
          <p>充值成功</p>
        </div>
        <div class="wallet_alert_box_content">
          <h1>¥5000.00</h1>
          <p>充值成功，您可以在“我的钱包”页面查看余额</p>
        </div>
        <div class="wallet_alert_box_close" @click="closeAlert">
          <img src="../../assets/wallet_icon_close.png" alt />
        </div>
      </div>
    </div>
    <!-- 充值失败 -->
    <div class="wallet_alert" v-show="error">
      <div class="wallet_alert_box">
        <div class="wallet_alert_box_top">
          <p>充值成功</p>
        </div>
        <div class="wallet_alert_box_content">
          <h1>¥5000.00</h1>
          <p class="redd">充值失败，您的卡内余额不足，请重新选择支付方式</p>
        </div>
        <div class="wallet_alert_box_close" @click="closeAlert">
          <img src="../../assets/wallet_icon_close.png" alt />>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      radio: "1",
      succeed: false,
      error: false,
      money: [
        {
          mach: "3000",
          song: false,
          target: true
        },
        {
          mach: "5000",
          song: false,
          target: false
        },
        {
          mach: "8000",
          song: true,
          target: false
        }
      ]
    };
  },
  methods: {
    recharge() {
      this.succeed = true;
    },
    closeAlert() {
      this.succeed = false;
    },
    xuan(e) {
      this.money.map(item => (item.target = false));
      e.target = true;
    },
    toDetail() {
      this.$router.push("/detail");
    }
  }
};
</script>

<style lang="less" scoped>
.redd {
  color: #ff2e2e !important;
}
.target_bac {
  width: 203px !important;
  height: 142px !important;
  background: url("../../assets/wallet_img_press.png") no-repeat center !important;
  background-size: 100% !important;
  border: none !important;
}
.padd {
  padding: 0 30px;
}
div.payment_list {
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

div.wallet {
  padding-bottom: 130px;
  div.wallet_top {
    width: 100%;
    height: 468px;
    padding-left: 60px;
    background: url("../../assets/wallet_bg.png") no-repeat center;
    background-size: 100%;
    background-position-y: -90px;
    padding-top: 80px;
    div.wallet_top_p {
      p {
        font-size: 26px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 37px;
      }
    }

    div.wallet_top_h1 {
      margin-top: 20px;
      h1 {
        font-size: 48px;
        font-family: PingFang-SC-Heavy, PingFang-SC;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        line-height: 67px;
      }
    }

    div.wallet_top_btn {
      margin-top: 59px;
      button:nth-child(2) {
        margin-left: 20px;
      }
      button {
        border-radius: 30px;
        background: rgba(0, 0, 0, 0);
        border: 1px solid rgba(255, 255, 255, 1);
        padding: 8px 27px;
        font-size: 30px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
    }
  }

  div.wallet_refill {
    margin-top: 40px;
    div.wallet_refill_title {
      h1 {
        font-size: 36px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 50px;
      }
    }

    div.wallet_refill_wrap {
      margin-top: 30px;
      height: 140px;
      display: flex;
      justify-content: space-between;
      .wallet_refill_wrap_box:nth-child(3) {
        p {
          margin-top: 29px;
          line-height: 50px;
        }
      }
      div.wallet_refill_wrap_box {
        width: 200px;
        height: 140px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        border: 1px solid rgba(222, 222, 222, 1);
        p {
          font-size: 36px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          line-height: 140px;
        }
        h1:nth-child(2) {
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          text-align: center;
          color: rgba(51, 51, 51, 1);
          span {
            color: #fa9702;
            font-size: 24px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
          }
        }
      }
    }
  }

  div.wallet_payment {
    margin-top: 50px;
    div.wallet_payment_title {
      h1 {
        font-size: 36px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 50px;
      }
    }

    div.wallet_payment_li {
      div.payment_list {
        van-radio-group {
          van-radio {
            img {
            }

            p {
            }
          }
        }
      }
    }
  }

  div.wallet_hint {
    margin-top: 30px;
    display: flex;
    align-items: center;
    height: 100px;
    background: rgba(244, 244, 244, 1);
    line-height: 100px;
    div.wallet_hint_left {
      img {
        width: 32px;
        height: 32px;
        margin-top: 40px;
      }
    }

    div.wallet_hint_right {
      margin-left: 20px;
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
        span {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #fa9702;
          line-height: 33px;
        }
      }
    }
  }

  div.wallet_affirm {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 130px;
    background: rgba(255, 255, 255, 1);
    align-items: center;
    box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
    justify-content: space-between;
    div.wallet_affirm_left {
      display: flex;
      line-height: 16px;
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }

      h1 {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(250, 151, 2, 1);
        margin-left: 40px;
      }
    }

    div.wallet_affirm_right {
      width: 330px;
      height: 88px;
      background: rgba(250, 151, 2, 1);
      border-radius: 6px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;

      text-align: center;
    }
  }

  div.wallet_alert {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    div.wallet_alert_box {
      width: 486px;
      height: 638px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("../../assets/wallet_img_success.png") no-repeat center;
      background-size: 100%;
      div.wallet_alert_box_top {
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translate(-50%, -50%);
        p {
          font-size: 34px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 48px;
        }
      }

      div.wallet_alert_box_content {
        width: 386px;
        text-align: center;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
          font-size: 36px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 50px;
        }

        p {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 33px;
          margin-top: 25px;
        }
      }
      div.wallet_alert_box_close {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        text-align: center;
        line-height: 60px;
        position: absolute;
        top: 115%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
<style scoped>
.wallet >>> .van-radio-group .van-radio:nth-child(3) .van-radio__label img {
  width: 58px;
  height: 32px;
}
.wallet >>> .van-radio-group .van-radio:nth-child(3) .van-radio__label p {
  margin-left: 35px;
}
</style>