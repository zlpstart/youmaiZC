<template>
  <div :class="{indent:state == 'yes'}">
    <van-tabs v-model="active" @click="changeIndent">
      <van-tab title="全部">
        <IndentList @postState="postState" :indentData="active" />
      </van-tab>
      <van-tab title="已完成">
        <IndentList @postState="postState" :indentData="active" />
      </van-tab>
      <van-tab title="待支付">
        <IndentList @postState="postState" :indentData="active" />
      </van-tab>
      <van-tab title="已取消">
        <IndentList @postState="postState" :indentData="active" />
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
      active: 0,
      isData:{},
      state:''
    };
  },
  components: {
    IndentList
  },
  methods:{
    changeIndent(name,title){
      this.active = name;
    },
    postState(e){
      console.log("我是父组件")
      console.log(e)
      this.state = e
    }
  },
  mounted(){

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