<template>
  <div class="login padd">
    <div class="login_title">
      <div class="login_title_h1">
        <h1>有麦众创</h1>
      </div>
      <div class="login_title_p">
        <p>寻找你的办公租赁需求</p>
      </div>
    </div>
    <div class="login_form">
      <div class="login_form_input">
        <input type="text" v-model="loginForm.phone" placeholder="请输入您的手机号码" />
      </div>
      <div class="login_form_input">
        <input type="text" v-model="loginForm.verify" placeholder="请输入验证码" />
        <button @click="getCode" v-show="getC">获取验证码</button>
        <button v-show="!getC">{{timer}}s</button>
      </div>
    </div>
    <div
      v-show="(loginForm.phone != '' && loginForm.verify != '')"
      class="login_button"
      @click="login"
    >登录</div>
    <div v-show="(loginForm.phone == '' || loginForm.verify == '')" class="login_button2">登录</div>
    <div class="login_third">
      <div class="login_third_title">
        <div class="login_third_title_xian"></div>
        <div class="login_third_title_txt">第三方账户登录</div>
        <div class="login_third_title_xian"></div>
      </div>
      <div class="login_third_logo">
        <ul>
          <li>
            <img src="../../assets/signin_icon_wechat.png" alt />
          </li>
          <li>
            <img src="../../assets/signin_icon_qq.png" alt />
          </li>
          <li>
            <img src="../../assets/sigin_icon_sina.png" alt />
          </li>
        </ul>
      </div>
    </div>
    <div class="login_bottom">
      <p>
        登录即同意
        <span @click="toServeAgreement">《用户服务协议》</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        phone: "",
        verify: ""
      },
      timer: 60,
      getC: true
    };
  },
  methods: {
    login() {
      let para = {
        phone: this.loginForm.phone,
        code: this.loginForm.verify
      };
      this.$api.login.login(para).then(res => {
        // console.log(res)
        window.sessionStorage.setItem("userId", res.data.data.id);
        window.sessionStorage.setItem("key", 1);
        this.$router.push("/"); 
      }).catch(err => console.log(err))
    },
    toServeAgreement() {
      this.$router.push("/serveAgreement");
    },
    getCode() {
      this.timer = 60;
      this.getC = false;
      let para = {
        phone: this.loginForm.phone
      };
      this.$api.login.getRegistersms(para).then(res => {
        
      });

      let timer = setInterval(() => {
        this.timer -= 1;
        if (this.timer <= 0) {
          clearInterval(timer);
          this.getC = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}
div.login {
  margin-top: 100px;
  div.login_title {
    div.login_title_h1 {
      h1 {
        font-size: 54px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(250, 151, 2, 1);
        line-height: 75px;
      }
    }

    div.login_title_p {
      margin-top: 20px;
      p {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 45px;
      }
    }
  }

  div.login_form {
    margin-top: 85px;
    .login_form_input:nth-child(2) {
      margin-top: 20px;
    }

    div.login_form_input {
      width: 100%;
      height: 96px;
      background: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: space-between;
      position: relative;

      input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #999999;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #999999;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #999999;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #999999;
      }

      input {
        width: 100%;
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 33px;
        padding: 32px 0 31px 20px;
        border: none;
        border-bottom: 1px solid #dedede;
      }
      button {
        width: 140px;
        height: 48px;
        background: rgba(244, 244, 244, 1);
        border-radius: 4px;
        font-size: 20px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 28px;
        margin-top: 24px;
        position: absolute;
        padding: 10px;
        right: 20px;
      }
    }
  }
  .login_button2 {
    height: 88px;
    background: rgba(250, 151, 2, 0.5);
    margin-top: 90px;
    border-radius: 6px;
    font-size: 32px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;
  }

  div.login_button {
    margin-top: 90px;
    width: 690px;
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

  div.login_third {
    width: 487px;
    margin: auto;
    margin-top: 100px;
    div.login_third_title {
      display: flex;
      justify-content: space-between;
      div.login_third_title_xian {
        margin-top: 16px;
        width: 141px;
        height: 1px;
        background: #c7c7c7;
      }

      div.login_third_title_txt {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 33px;
      }
    }

    div.login_third_logo {
      width: 365px;
      margin: auto;
      margin-top: 45px;
      ul {
        display: flex;
        justify-content: space-between;
        li:nth-child(2) {
          img {
            width: 40px;
            margin-top: 5px;
          }
        }
        li {
          img {
            width: 50px;
          }
        }
      }
    }
  }

  div.login_bottom {
    text-align: center;
    margin-top: 76px;
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
</style>