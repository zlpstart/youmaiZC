<template>
  <div class="home">
    <div class="home_router">
      <router-view />
    </div>
    <van-tabbar  route v-model="active" class="zlp">
      <van-tabbar-item to="/homeWrap" class="zlp_txt" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item class="zlp_txt" icon="search">标签</van-tabbar-item>
      <van-tabbar-item class="zlp_txt" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item class="zlp_txt" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HomeTopBar from "../../components/HomeTopBar/index";
import HomeContent from "../../components/HomeContent/index";

export default {
  name: "home",
  data() {
    return {
      active: 0
    };
  },
  components: {
    HomeTopBar,
    HomeContent
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 0 30px;
  .home_router {
    padding-bottom: 166px;
  }
  .zlp {
    width: 100%;
    height: 166px;
  }
  .van-tabbar-item {
    width: 96px;
    height: 96px;
  }
}
</style>