<template>
  <div class="box">
    <div class="aboutToSee">
      <div class="aboutToSee_top">
        <div class="aboutToSee_top_txt">
          <p>2020-06-20(周六) 09：30-10：00</p>
        </div>
        <div class="aboutToSee_top_btn">
          <p>联系我们</p>
        </div>
      </div>
      <div class="aboutToSee_content">
        <div class="aboutToSee_content_box">
          <LiveList />
        </div>
      </div>
    </div>
    <div class="aboutToSee">
      <div class="aboutToSee_top">
        <div class="aboutToSee_top_txt">
          <p>2020-06-20(周六) 09：30-10：00</p>
        </div>
        <div class="aboutToSee_top_btn">
          <p>联系我们</p>
        </div>
      </div>
      <div class="aboutToSee_content">
        <div class="aboutToSee_content_box">
          <LiveList />
        </div>
      </div>
    </div>
    <div class="aboutToSee">
      <div class="aboutToSee_top">
        <div class="aboutToSee_top_txt">
          <p>2020-06-20(周六) 09：30-10：00</p>
        </div>
        <div class="aboutToSee_top_btn">
          <p>联系我们</p>
        </div>
      </div>
      <div class="aboutToSee_content">
        <div class="aboutToSee_content_box">
          <LiveList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiveList from "../../components/RentingList/index";

export default {
  name: "aboutToSee",
  data() {
    return {};
  },
  components: {
    LiveList
  }
};
</script>

<style lang="less" scoped>
.aboutToSee:nth-child(1) {
  .aboutToSee_top:nth-child(1){
    margin-top: 0;
  }
}
div.aboutToSee {

  div.aboutToSee_top {
      display: flex;
      margin-top: 40px;
      justify-content: space-between;
      align-items: center;
    padding: 0 30px;
    height: 100px;
    background: url("../../assets/img_yuekan .png") no-repeat center;
    background-size: 100%;
    div.aboutToSee_top_txt {
      width: 100%;
      height: 100px;
      line-height: 80px;
      //   background: url("../../assets/0img_yuekan.png") no-repeat center;

      p {
        font-size: 30px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }

    div.aboutToSee_top_btn {
      width: 118px;
      height: 42px;
    background: url("../../assets/img_contact.png") no-repeat center;
      background-size: 100%;
      text-align: center;
      margin-top: -20px;
      padding: 5px 11px;
      box-sizing: content-box;
      p {
        font-size: 20px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 42px;
      }
    }
  }

  div.aboutToSee_content {
    width: 100%;
    background: white;
    div.aboutToSee_content_box {
      padding: 0 30px;
    }
  }
}
</style>