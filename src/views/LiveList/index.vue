<template>
  <div class="liveList">
    <LiveList :getLiveLists="liveLists" />
  </div>
</template>

<script>
import LiveList from "../../components/LiveList/index";

export default {
  name: "liveList",
  data() {
    return {
      liveLists: []
    };
  },
  methods: {},
  components: {
    LiveList
  },
  mounted() {
    this.$api.liveList.getliveList().then(res => {
      console.log(res.data.data.data);
      this.liveLists = res.data.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.liveList {
  width: 100%;
  padding: 0 30px;
}
</style>