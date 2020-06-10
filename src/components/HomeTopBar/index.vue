<template>
  <div class="HomeTopBar">
    <div class="HomeTopBar_banner">
      <img src="../../assets/ceshi.jpg" alt />
    </div>
    <div class="HomeTopBar_box">
      <div class="HomeTopBar_minbox" @click="toList">
        <div class="HomeTopBar_minbox_txt">
          <h1 class="txt_medium">办公租房</h1>
          <p class="txt_min">拎包入驻，灵活办公</p>
        </div>
        <div class="HomeTopBar_minbox_logo">
          <img src="../../assets/home_icon_bangong_nor.png" alt />
        </div>
        <div class="HomeTopBar_minbox_right">></div>
        <div class="HomeTopBar_minbox_radiu"></div>
      </div>
      <div class="HomeTopBar_minbox" @click="toLiveList">
        <div class="HomeTopBar_minbox_txt">
          <h1 class="txt_medium">直播基地</h1>
          <p class="txt_min">拎包入驻，灵活办公</p>
        </div>
        <div class="HomeTopBar_minbox_logo">
          <img src="../../assets/home_icon_zhibo_nor.png" alt />
        </div>
        <div class="HomeTopBar_minbox_right">></div>
        <div class="HomeTopBar_minbox_radiu"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/layout.css";

export default {
  name: "HomeTopBar",
  methods: {
    toList() {
      this.$router.push("/rentingList");
    },
    toLiveList() {
      this.$router.push("/liveList");
    }
  }
};
</script>

<style scoped lang="less">
.HomeTopBar {
  .HomeTopBar_banner {
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .HomeTopBar_box {
    display: flex;
    justify-content: space-between;
    margin-top: 58px;
    .HomeTopBar_minbox {
      width: 335px;
      height: 140px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.06);
      border-radius: 6px;
      padding: 37px 20px;
      display: flex;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      &_txt {
        width: 176px;
        p {
          white-space: nowrap;
        }
      }
      &_logo {
        width: 48px;
        height: 48px;
        margin-left: 27px;
        margin-top: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &_right {
        width: 13px;
        height: 24px;
        line-height: 70px;
      }
      .HomeTopBar_minbox_radiu {
        position: absolute;
        width: 114px;
        height: 106px;
        bottom: -53px;
        right: -57px;
        border-radius: 114px;
        background: rgba(250, 151, 2, 1);
        opacity: 0.09;
      }
    }
  }
}
</style>