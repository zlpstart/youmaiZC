<template>
  <div class="setPass">
    <div class="set_box">
      <p>短信验证码</p>
      <input type="text" maxlength="6" v-model="formFlem.code" placeholder="请输入短信验证码" />
      <button class="isbtn" v-show="sentCode" @click="getCode">发送验证码</button>
      <button class="isbtn2" v-show="!sentCode">再次发送({{timer}}s)</button>
    </div>
    <div class="set_box">
      <p>支付密码</p>
      <input maxlength="6" type="text" v-model="formFlem.password" placeholder="请输入6位数支付密码" />
    </div>
    <div class="set_box">
      <p>确认密码</p>
      <input maxlength="6" type="text" v-model="formFlem.twopassword" placeholder="请再次输入6位数支付密码" />
    </div>
    <button
      v-show="formFlem.code == '' || formFlem.password.length != 6 || formFlem.twopassword.length != 6"
      class="over"
    >完成</button>
    <button
      v-show="formFlem.code != '' && formFlem.password.length == 6 && formFlem.twopassword.length == 6"
      class="over2"
      @click="overPass"
    >完成</button>
    <div class="love" v-show="setSucess">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>设置成功</p>
      </div>
    </div>
    <div class="love" v-show="setErr">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>设置失败</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setPass",
  data() {
    return {
      formFlem: {
        code: "",
        password: "",
        twopassword: ""
      },
      setSucess: false,
      setErr: false,
      timer: 60,
      sentCode: true,
      overTime: 2
    };
  },
  methods: {
    getCode() {
      this.sentCode = false;
      this.timer = 60;
      let timer = setInterval(() => {
        this.timer -= 1;
        if (this.timer <= 0) {
          this.sentCode = true;
        }
      }, 1000);
      let para = {
        phone: window.sessionStorage.getItem("phone")
      };
      this.$api.login.getRegistersms(para).then(res => {
        console.log(res);
      });
    },
    overPass() {
      let para = {
        phone: window.sessionStorage.getItem("phone"),
        code: this.formFlem.code,
        paypass: this.formFlem.password,
        checkpass: this.formFlem.twopassword
      };
      this.$api.setPass.setPass(para).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.setSucess = true;
          this.overTime = 2;
          let timer = setInterval(() => {
            this.overTime--;
            if (this.overTime <= 0) {
              this.setSucess = false;
              clearInterval(timer);
            }
          }, 1000);
        } else {
          this.overTime = 2;
          console.log("失败了");
          this.setErr = true;
          let timer = setInterval(() => {
            this.overTime--;
            console.log(this.overTime);
            if (this.overTime <= 0) {
              this.setErr = false;
              clearInterval(timer);
              console.log("哈哈哈");
            }
          }, 1000);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
div.setPass {
  padding: 0 30px;
  div.set_box {
    height: 88px;
    width: 100%;
    padding-top: 29px;
    border-bottom: 1px solid #dedede;
    display: flex;
    position: relative;
    p {
      height: 32px;
      // background: red;
      width: 190px;
      text-align: center;
      border-right: 1px solid #dedede;
      box-sizing: border-box;
      font-size: 30px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    input {
      width: 291px;
      height: 30px;
      border: none;
      margin-left: 20px;
    }
    input::placeholder {
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
  }
}
.over {
  width: 690px;
  height: 88px;
  background: rgba(250, 151, 2, 0.5);
  border-radius: 6px;
  font-size: 32px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  margin-top: 30px;
  color: rgba(255, 255, 255, 1);
}
.over2 {
  width: 690px;
  height: 88px;
  background: rgba(250, 151, 2, 0.8);
  border-radius: 6px;
  margin-top: 30px;
  font-size: 32px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.isbtn {
  width: 163px;
  height: 60px;
  background: rgba(244, 244, 244, 1);
  border-radius: 2px;
  margin-bottom: 30px;
  position: absolute;
  right: 0;
  top: 13px;
  font-size: 22px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(251, 172, 53, 1);
  line-height: 30px;
}
.isbtn2 {
  width: 193px;
  height: 60px;
  background: rgba(244, 244, 244, 1);
  border-radius: 2px;
  font-size: 22px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(199, 199, 199, 1);
  line-height: 30px;
  position: absolute;
  right: 0;
  top: 13px;
}
</style>