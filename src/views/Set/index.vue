<template>
  <div class="set">
    <div class="set_box" @click="toSetPassWord">
      <p>设置支付密码</p>
    </div>
    <div class="set_box" @click="amendPassWord">
      <p>修改支付密码</p>
    </div>
    <div class="set_box" @click="forgetPassWord">
      <p>忘记支付密码</p>
    </div>
    <div class="uploging">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    toSetPassWord() {
      this.$router.push("/setPass");
    },
    amendPassWord() {
      this.$router.push("/modificationPass");
    },
    forgetPassWord() {
      this.$router.push("/setPass");
    }
  }
};
</script>

<style lang="less" scoped>
div.set {
  padding: 0 30px;
  div.set_box {
    height: 88px;
    width: 100%;
    line-height: 88px;
    border-bottom: 1px solid #dedede;
    p {
      font-size: 26px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .uploging {
    width: 690px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background: rgba(250, 151, 2, 1);
    border-radius: 6px;
    position: fixed;
    bottom: 68px;
    font-size: 32px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
</style>