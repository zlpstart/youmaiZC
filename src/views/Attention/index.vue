<template>
  <div class="attention">
    <div class="box" v-if="!showAttention">
      <van-tabs v-model="active">
        <van-tab title="办公租房">
          <div class="attention_content">
            <RentingList />
          </div>
        </van-tab>
        <van-tab title="直播基地">
          <div class="attention_content">
            <LiveList />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="box" v-if="showAttention">
      <div class="box_content">
        <div class="box_img">
          <img src="../../assets/img_guanzhu.png" alt />
        </div>
        <div class="box_txt">
          <p>您暂时没有关注哦~</p>
          <p>去看看吧</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RentingList from "../../components/RentingList/index";
import LiveList from "../../components/LiveList/index";

export default {
  name: "attention",
  data() {
    return {
      active: 0,
      showAttention: false
    };
  },
  components: {
    RentingList,
    LiveList
  }
};
</script>

<style lang="less" scoped>
.attention_content {
  padding: 0 30px;
}
div.box {
  div.box_content {
    width: 627px;
    height: 619px;
    margin: auto;
    margin-top: 400px;
    position: relative;
    div.box_img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div.box_txt {
      width: 250px;
      text-align: center;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 38px;
      }
    }
  }
}

</style>

<style scoped>
.attention >>> .van-tabs--line .van-tabs__wrap {
  background: red !important;
}
.van-tabs--line .van-tabs__wrap {
  background: red !important;
}
</style>