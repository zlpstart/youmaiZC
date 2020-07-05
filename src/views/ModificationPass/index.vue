<template>
  <div class="modificationPass">
    <div class="set_box">
      <p>短信验证码</p>
      <input type="text" v-model="formFlem.code" placeholder="请输入短信验证码" />
      <button>发送验证码</button>
    </div>
    <div class="set_box">
      <p>支付密码</p>
      <input type="text" v-model="formFlem.password" placeholder="请输入支付密码" />
    </div>
    <div class="set_box">
      <p>再次输入</p>
      <input type="text" v-model="formFlem.twopassword" placeholder="请再次输入支付密码" />
    </div>
    <button
      v-show="formFlem.code == '' || formFlem.password == '' || formFlem.twopassword == ''"
      class="over"
    >确认修改</button>
    <button
      v-show="formFlem.code != '' && formFlem.password != '' && formFlem.twopassword != ''"
      class="over2"
    >确认修改</button>
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
      }
    };
  }
};
</script>

<style lang="less" scoped>
div.modificationPass {
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
    button {
      width: 163px;
      height: 60px;
      background: rgba(244, 244, 244, 1);
      border-radius: 2px;
      margin-bottom: 30px;
      position: absolute;
      right: 0;
      top: 13px;
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
</style>