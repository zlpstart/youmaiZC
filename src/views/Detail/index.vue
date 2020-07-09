<template>
  <div class="detail">
    <van-tabs v-model="active" @click="hehe">
      <van-tab title="全部">
        <detailList :detail="detail" />
      </van-tab>
      <van-tab title="收入">
        <detailList :detail="detail" />
      </van-tab>
      <van-tab title="支出">
        <detailList :detail="detail" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import detailList from "../../components/DetailList/index";

export default {
  name: "detail",
  data() {
    return {
      active: 0,
      detail: []
    };
  },
  mounted() {
    let para = {
      id: window.sessionStorage.getItem("userId")
    };
    this.$api.wallet.getwalletDerails(para).then(res => {
      console.log(res)
      this.detail = res.data.data;
    });
  },
  methods: {
    hehe(name, title) {
      console.log(name);
      console.log(title);
      if (name == 0) {
        console.log(111)
        let para = {
          id: window.sessionStorage.getItem("userId")
        };
        this.$api.wallet.getwalletDerails(para).then(res => {
          console.log("你点击了全部")
          console.log(res)
          this.detail = res.data.data;
        });
      } else if (name == 1) {
        let para = {
          id: window.sessionStorage.getItem("userId"),
          type: "pay"
        };
        this.$api.wallet.getwalletDerails(para).then(res => {
          this.detail = res.data.data;
        });
      } else if (name == 2) {
        let para = {
          id: window.sessionStorage.getItem("userId"),
          type: "income"
        };
        this.$api.wallet.getwalletDerails(para).then(res => {
          this.detail = res.data.data;
        });
      }
    }
  },
  components: {
    detailList
  }
};
</script>

<style lang="less" scoped>
</style>