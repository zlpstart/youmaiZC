<template>
  <div class="more">
    <div class="more_top">
      <h1>设施服务</h1>
    </div>
    <div class="more_xian"></div>
    <div class="more_list">
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_traffic_nor.png" alt />
          <p>交通便利</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_baojie_nor.png" alt />
          <p>保洁服务</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_visit_nor.png" alt />
          <p>政要参观</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_light_nor.png" alt />
          <p>宽阔明亮</p>
        </div>
      </div>
    </div>
    <div class="more_list">
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_meeting_nor.png" alt />
          <p>会议展厅</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_wuye_nor.png" alt />
          <p>物业服务</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_restaurant_nor.png" alt />
          <p>科创餐厅</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_market_nor.png" alt />
          <p>便捷商超</p>
        </div>
      </div>
    </div>
    <div class="more_list">
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_chat_nor.png" alt />
          <p>商务洽谈</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_coffee_nor.png" alt />
          <p>休闲茶吧</p>
        </div>
      </div>
      <div class="more_list_wrap">
        <div class="more_list_box">
          <img src="../../assets/con_icon_exercise_nor.png" alt />
          <p>健身中心</p>
        </div>
      </div>
      <div class="more_list_wrap" v-for="item in ((Math.floor(11/4)+1)*4-11)" :key="item">
        <div class="more_list_box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isData:1
    }
  }
};
</script>

<style lang="less" scoped>
div.more {
  padding: 30px;
  div.more_top {
    h1 {
      font-size: 36px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 50px;
    }
  }

  div.more_xian {
    width: 38px;
    margin-top: 40px;
    height: 2px;
    background: rgba(174, 174, 174, 1);
  }

  div.more_list {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    .more_list_wrap {
      div.more_list_box {
        width: 96px;
        margin-top: 47px;
        img {
          height: 45px;
          margin-left: 25px;
        }

        p {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 33px;
          margin-top: 11px;
          text-align: center;
        }
      }
    }
  }
}
</style>