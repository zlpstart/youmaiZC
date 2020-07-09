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
        <h1 class="txt_title">{{details.sapce_live_name}}</h1>
      </div>
      <div class="liveDetails_wrap_rent">
        <p class="txt_min">租金</p>
        <h1 class="txt_money">{{details.rent}}元/时起</h1>
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
        <p class="txt_min" @click="toMore">更多</p>
      </div>
      <div class="liveDetails_serve_content">
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_traffic_nor.png" alt />
          <p>交通便利</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_baojie_nor.png" alt />
          <p>保洁服务</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_visit_nor.png" alt />
          <p>政要参观</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_light_nor.png" alt />
          <p>宽阔明亮</p>
        </div>
      </div>
    </div>
    <div class="liveDetails_introductory paddd">
      <div class="liveDetails_introductory_title">
        <p class="txt_title_min">优惠政策</p>
      </div>
      <div class="liveDetails_introductory_content">
        <div class="liveDetails_introductory_content_card">连租优惠</div>
        <p>{{details.discount}}</p>
      </div>
    </div>
    <div class="liveDetails_synopsis paddd">
      <h1 class="txt_title_min">基地简介</h1>
      <p>{{details.describe}}</p>
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
          <p class="txt_medium">¥{{details.deposit}}</p>
          <img src="../../assets/con_icon_ques.png" @click="toYa" />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>最少起订</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">{{details.mini_time}}个小时</p>
          <img src="../../assets/con_icon_ques.png" @click="toMinimum" />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>退订政策</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">若取消时距使用6小时以上</p>
          <img src="../../assets/con_icon_ques.png" alt @click="toUnsubscribe" />
        </div>
      </div>
      <div class="liveDetails_enter_list">
        <div class="liveDetails_enter_list_left">
          <p>入驻守则</p>
        </div>
        <div class="liveDetails_enter_list_right">
          <p class="txt_medium">一、保持办公环境清馨，严禁在办公区域</p>
          <img src="../../assets/con_icon_ques.png" @click="toEnter" />
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
        <button @click="toAppointment">立即预订</button>
      </div>
      <div class="liveDetails_bottom_btn2">
        <button>在线咨询</button>
      </div>
    </div>
    <div class="love" v-show="loveSucess">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>关注成功</p>
      </div>
    </div>
    <div class="love" v-show="loveError">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>取消关注成功</p>
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
      attentioning: true,
      loveSucess: false,
      loveError: false,
      details: {}
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
      if (this.loveSucess || this.loveError) {
      } else {
        this.attentioning = !this.attentioning;
        if (this.attentioning) {
          console.log("我要取消关注");
          let para = {
            id: this.details.follow_id
          };
          this.$api.liveList.unAttention(para).then(res => {
            if (res.data.code == 200) {
              this.loveError = false;
              this.loveError = true;
              if (this.loveError) {
                this.loveSucess = false;
              }
              setTimeout(() => {
                this.loveError = false;
              }, 1000);
            }
          });
        } else {
          let para = {
            id: window.sessionStorage.getItem("userId"),
            follow_id: this.details.follow_id,
            follow_type: this.details.follow_type
          };
          this.$api.liveList.attention(para).then(res => {
            console.log(res);
            if (res.data.code == 200) {
              console.log("我要关注");
              this.loveSucess = false;
              this.loveSucess = true;
              if (this.loveSucess) {
                this.loveError = false;
              }
              setTimeout(() => {
                this.loveSucess = false;
              }, 1000);
            }
          });
        }
      }
    },
    toYa() {
      this.$router.push("/guarantee");
    },
    toMinimum() {
      this.$router.push("/minimum");
    },
    toEnter() {
      this.$router.push("/enter");
    },
    toMore() {
      this.$router.push("/more");
    },
    toUnsubscribe() {
      this.$router.push("/unsubscribe");
    }
  },
  mounted() {
    let para = {
      id: this.$route.params.id
    };
    this.$api.liveList.getDetails({ id: this.$route.params.id }).then(res => {
      this.details = res.data.data.content;
      window.sessionStorage.setItem("liveDatas", JSON.stringify(this.details));
      console.log(res.data.data.content);
      if (res.data.data.content.status_follow == 1) {
        this.attentioning = false;
      } else {
        this.attentioning = true;
      }
    });
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
        height: 45px;
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
div.love {
  width: 272px;
  height: 202px;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 34%;
  left: 34%;
  div.love_img {
    margin-top: 40px;
    margin-left: 101px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  div.love_txt {
    margin-top: 21px;
    p {
      font-size: 26px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 37px;
    }
  }
}
</style>