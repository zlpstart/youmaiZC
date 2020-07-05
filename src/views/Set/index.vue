<template>
  <div class="set">
    <div class="set_box">
      <p>设置支付密码</p>
    </div>
    <div class="set_box">
      <p>修改支付密码</p>
    </div>
    <div class="set_box">
      <p>忘记支付密码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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
}
</style>