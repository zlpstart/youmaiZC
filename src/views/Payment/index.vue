<template>
  <div class="payment">
    <div class="payment_top">
      <h1>
        <span>¥</span>
        {{money}}
      </h1>
      <p>支付剩余时间29：59</p>
    </div>
    <div class="payment_list">
      <van-radio-group v-model="radio">
        <van-radio name="1" icon-size="24px">
          <img src="../../assets/img_vip.png" alt />
          <p>会员支付</p>
          <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
        </van-radio>
        <van-radio name="2" icon-size="24px">
          <img src="../../assets/img-weixin.png" alt />
          <p>微信支付</p>
          <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
        </van-radio>
        <van-radio name="3" icon-size="24px">
          <img src="../../assets/icon-zhifubao-nor@3x.png" alt />
          <p>支付宝支付</p>
          <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
        </van-radio>
        <van-radio name="4" icon-size="24px">
          <img src="../../assets/logo-header.png" alt />
          <p>快钱支付</p>
          <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
        </van-radio>
      </van-radio-group>
    </div>
    <div class="payment_btn" @click="confirm">确认支付</div>

    <div class="passowrd_wrap" v-show="isPass">
      <div class="password">
        <div class="password_top">
          <div class="password_top_close" @click="close">
            <img src="../../assets/zhibo_icon_close_nor.png" alt />
          </div>
          <div class="password_top_txt">
            <p>请输入会员支付密码</p>
          </div>
        </div>
        <div class="password_money">
          <p>
            <span>¥</span>
            {{money}}
          </p>
        </div>
        <!-- 密码输入框 -->
        <van-password-input
          :value="value"
          :error-info="errorInfo"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
      </div>
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      radio: "1",
      money: "",
      value: "",
      showKeyboard: true,
      errorInfo: "",
      isPass: false
    };
  },
  methods: {
    confirm() {
      this.isPass = true;
      // this.$router.push("/paymentSucceed")
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        let para = {
          pay_password: this.value
        };
        this.$api.liveList.postPassWord(para).then(res => {
          if (res.data.code != 200) {
            this.errorInfo = res.data.msg;
          }
          console.log(res);
        });
        console.log(this.value);
      } else {
        this.errorInfo = "";
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    close() {
      this.isPass = false;
    }
  },
  mounted() {
    this.money = window.sessionStorage.getItem("money");
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
      font-size: 60px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 48px;
      span {
        font-size: 34px;
      }
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
.passowrd_wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}
.password {
  width: 562px;
  height: 445px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 30px;
}
.password_top {
  display: flex;
  padding-left: 30px;
  margin-bottom: 57px;
}
.password_top_close img {
  width: 21px;
  height: 21px;
  flex: 1;
}
.password_top_txt {
  flex: 2;
  font-size: 28px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.password_money p {
  font-size: 48px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.password_money span {
  font-size: 28px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
</style>