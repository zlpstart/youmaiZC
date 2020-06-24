<template>
  <div class="indent">
    <van-tabs v-model="active" @click="changeIndent">
      <van-tab title="全部">
        <IndentList :indentData="active" />
      </van-tab>
      <van-tab title="已完成">
        <IndentList :indentData="active" />
      </van-tab>
      <van-tab title="待支付">
        <IndentList :indentData="active" />
      </van-tab>
      <van-tab title="已取消">
        <IndentList :indentData="active" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import IndentList from "../../components/IndentList/index";

export default {
  name: "indent",
  data() {
    return {
      active: 0
    };
  },
  components: {
    IndentList
  },
  methods:{
    changeIndent(name,title){
      this.active = name;
    }
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