<template>
  <div class="liveDetails">
    <div class="liveDetails_wrap">
      <van-swipe @change="onChange" style="width:100%">
        <van-swipe-item>
          <img src="../../assets/ceshi.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ceshi.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ceshi.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/ceshi.jpg" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
      <div class="liveDetails_wrap_title">
        <h1 class="txt_title">厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</h1>
      </div>
      <div class="liveDetails_wrap_rent">
        <p class="txt_min">租金</p>
        <h1 class="txt_money">250元/时起</h1>
      </div>
      <div class="liveDetails_wrap_card">
        <div class="txt_card">
          <p>茶水间</p>
          <p>休闲区</p>
          <p>洽谈接待</p>
        </div>
      </div>
    </div>
    <div class="liveDetails_serve">
      <div class="liveDetails_serve_title">
        <h1 class="txt_title_min">设施服务</h1>
        <p class="txt_min">更多</p>
      </div>
      <div class="liveDetails_serve_content">
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_traffic_nor.png" alt />
          <p>交通便利</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_baojie_nor.png" alt />
          <p>交通便利</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_visit_nor.png" alt />
          <p>交通便利</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_light_nor.png" alt />
          <p>交通便利</p>
        </div>
      </div>
    </div>
    <div class="liveDetails_introductory paddd">
      <div class="liveDetails_introductory_title">
        <p class="txt_title_min">优惠政策</p>
      </div>
      <div class="liveDetails_introductory_content">
        <div class="liveDetails_introductory_content_card">连租优惠</div>
        <p>连续预定满3个小时，享受9.0折优惠</p>
      </div>
    </div>
    <div class="liveDetails_synopsis paddd">
      <h1 class="txt_title_min">基地简介</h1>
      <p>是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。</p>
    </div>
    <div class="liveDetails_enter paddd">
      <div class="liveDetails_enter_title">
        <h1 class="txt_title_min">入驻须知</h1>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>押金</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">¥200</p>
          <img src="../../assets/con_icon_ques.png" alt />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>最少起订</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">1个小时</p>
          <img src="../../assets/con_icon_ques.png" alt />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>退订政策</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">入住前一个小时</p>
          <img src="../../assets/con_icon_ques.png" alt />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>入驻守则</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">入住前一个小时</p>
          <img src="../../assets/con_icon_ques.png" alt />
        </div>
      </div>
    </div>
    <div class="liveDetails_bottom paddd">
      <div class="liveDetails_bottom_love" @click="attention" v-show="attentioning">
        <div class="liveDetails_bottom_love_img">
          <img src="../../assets/bangong_icon_coll_nor.png" alt />
        </div>
        <div class="liveDetails_bottom_love_txt">关注</div>
      </div>
      <div class="liveDetails_bottom_love" @click="attention" v-show="!attentioning">
        <div class="liveDetails_bottom_love_img">
          <img src="../../assets/bangong_icon_coll_press.png" alt />
        </div>
        <div class="liveDetails_bottom_love_txt">已关注</div>
      </div>
      <div class="liveDetails_bottom_btn1">
        <button @click="toAppointment">立即预定</button>
      </div>
      <div class="liveDetails_bottom_btn2">
        <button>在线咨询</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "liveDetails",
  data() {
    return {
      current: 0,
      attentioning: true
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    toAppointment() {
      this.$router.push(`/appointment/${2}`);
    },
    attention() {
      this.attentioning = !this.attentioning;
    }
  }
};
</script>

<style lang="less" scoped>
.liveDetails {
  padding: 0 0 130px 0;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.liveDetails_wrap {
  padding: 0 30px;
  .liveDetails_wrap_title {
    margin-top: 30px;
  }
  .liveDetails_wrap_rent {
    margin-top: 50px;
  }
  .liveDetails_wrap_card {
    margin-top: 24px;
  }
}
.liveDetails_serve {
  padding: 0 30px;
  .liveDetails_serve_title {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .liveDetails_serve_content {
    margin-top: 15px;
    display: flex;
    .liveDetails_serve_content_box:nth-child(1) {
      margin-left: 0;
    }
    .liveDetails_serve_content_box {
      text-align: center;
      margin-left: 102px;
      img {
        height: 35px;
      }
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
        margin-top: 15px;
      }
    }
  }
}

div.liveDetails_introductory.paddd {
  div.liveDetails_introductory_title {
    margin-top: 40px;
    p {
    }
  }

  div.liveDetails_introductory_content {
    margin-top: 20px;
    display: flex;
    div.liveDetails_introductory_content_card {
      padding: 5px 14px;
      background: rgba(255, 247, 235, 1);
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(250, 151, 2, 1);
      line-height: 30px;
    }

    p {
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 30px;
      margin-top: 5px;
      margin-left: 20px;
    }
  }
}

.liveDetails_synopsis {
  margin-top: 45px;
  p {
    font-size: 24px;
    margin-top: 20px;
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 33px;
  }
}

div.liveDetails_enter.paddd {
  margin-top: 40px;
  div.liveDetails_enter_title {
    h1.txt_title_min {
    }
  }
  .liveDetails_enter_list:nth-child(1) {
    margin-top: 9px;
  }
  .liveDetails_enter_list:nth-last-child(1) {
    margin-bottom: 40px;
  }
  div.liveDetails_enter_list {
    width: 100%;
    height: 88px;
    line-height: 88px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #f4f4f4 solid;
    div.liveDetails_enter_list_left {
      font-size: 26px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 37px;
      p {
        line-height: 88px;
      }
    }

    div.liveDetails_enter_list_right {
      display: flex;
      p {
        margin-right: 20px;
        line-height: 88px;

        max-width: 156px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: 32px;
        height: 32px;
        margin-top: 28px;
      }
    }
  }
}
div.liveDetails_bottom {
  width: 100%;
  height: 130px;
  padding: 21px 0;
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 10px rgba(0, 0, 0, 0.07);
  position: fixed;
  bottom: 0;
  left: 0;
  div.liveDetails_bottom_love {
    flex: 1;
    width: 66px;
    text-align: center;
    .liveDetails_bottom_love_img {
      width: 38px;
      height: 34px;
      margin-left: 35px;
      margin-top: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .liveDetails_bottom_love_txt {
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
      margin-top: 8px;
    }
  }

  div.liveDetails_bottom_btn1 {
    flex: 3;
    button {
      width: 286px;
      height: 88px;
      background: rgba(250, 151, 2, 1);
      border-radius: 6px;
      border: none;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 540;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }
  }

  div.liveDetails_bottom_btn2 {
    flex: 3;
    button {
      width: 286px;
      height: 88px;
      background: rgba(255, 186, 21, 1);
      border-radius: 6px;
      border: none;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 540;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }
  }
}
</style>