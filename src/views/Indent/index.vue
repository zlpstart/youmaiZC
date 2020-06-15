<template>
  <div class="indent">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <Indent />
      </van-tab>
      <van-tab title="已完成">
        <Indent />
      </van-tab>
      <van-tab title="待支付">
        <Indent />
      </van-tab>
      <van-tab title="已取消">
        <Indent />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Indent from "../../components/IndentList/index";

export default {
  name: "indent",
  data() {
    return {
      active: 0
    };
  },
  components: {
    Indent
  }
};
</script>

<style lang="less" scoped>
.indent {
  width: 100%;
  height: 100%;
  background: rgba(244, 244, 244, 1);
}
</style>