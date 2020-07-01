<template>
  <div class="home">
    <div class="home_router">
      <router-view />
    </div>
    <van-tabbar @change="onChange" :active="active" route v-model="active" class="zlp">
      <van-tabbar-item to="/homeWrap">
        <template>
          <img :src="active!=0?icon.home:iconActive.home" />
        </template>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/serve">
        <template>
          <img :src="active!=1?icon.serve:iconActive.serve" />
        </template>
        <span>企服</span>
      </van-tabbar-item>
      <van-tabbar-item to="/service">
        <template>
          <img :src="active!=2?icon.kefu:iconActive.kefu" />
        </template>
        <span>客服</span>
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        <template>
          <img :src="active!=3?icon.user:iconActive.user" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HomeTopBar from "../../components/HomeTopBar/index";
import HomeContent from "../../components/HomeContent/index";
import request from '../../api/request'

export default {
  name: "home",
  data() {
    return {
      active: 0,
      icon: {
        home: require("../../assets/home_icon_home_nor.png"),
        serve: require("../../assets/serve.png"),
        kefu: require("../../assets/home_icon_mess_nor.png"),
        user: require("../../assets/home_icon_my_nor.png")
      },
      iconActive: {
        home: require("../../assets/home_icon_home_press.png"),
        serve: require("../../assets/serveActive.png"),
        kefu: require("../../assets/home_icon_mess_press.png"),
        user: require("../../assets/home_icon_my_press.png")
      }
    };
  },
  components: {
    HomeTopBar,
    HomeContent
  },
  mounted() {
    if (window.sessionStorage.getItem("avtive")) {
      if (this.$route.path != "/homeWrap") {
        let a = window.sessionStorage.getItem("avtive");
        if (a) {
          this.active = a;
        }
      } else {
        this.active = 0;
      }
    }
    // console.log("请求参数")
    // this.$api.home.getNews().then(res => console.log(res))
  },
  methods: {
    onChange(e) {
      window.sessionStorage.setItem("avtive", e);
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  // padding: 0 30px;
  .home_router {
    padding-bottom: 98px;
  }
  .zlp {
    width: 100%;
    height: 98px;
  }
  .van-tabbar-item {
    width: 96px;
    height: 96px;
    text-align: center;
  }
}
</style>