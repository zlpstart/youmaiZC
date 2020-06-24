<template>
  <div class="IndentList_wrap">
    <div class="IndentList">
      <div class="IndentList_top">
        <div class="IndentList_top_left">
          <p>订单编号：2020060414YM490231334</p>
        </div>
        <div class="IndentList_top_right">
          <p>待支付</p>
        </div>
      </div>
      <div class="IndentList_content" @click="toLiveDetails">
        <div class="IndentList_content_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="IndentList_content_txt">
          <div class="IndentList_content_txt_title">
            <h1>厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</h1>
          </div>
          <div class="IndentList_content_txt_card">
            <div class="IndentList_content_txt_card_box">茶水间</div>
            <div class="IndentList_content_txt_card_box">路演厅</div>
          </div>
          <div class="IndentList_content_txt_mach">
            <p>250元/时起</p>
            <p>*4</p>
          </div>
        </div>
      </div>
      <div class="IndentList_bottom">
        <div class="IndentList_bottom_timer">
          <p>2020-06-30</p>
          <p>11:53</p>
        </div>
        <div class="IndentList_bottom_queding">
          <div class="IndentList_bottom_queding_mach">
            <h1>
              总金额：
              <span>¥1000.00</span>
            </h1>
          </div>
          <div
            :class="{IndentList_bottom_queding_btn:true,IndentList_bottom_queding_btn2:indentData == 3}"
          >
            <button v-show="indentData != 3" @click="cancel">取消订单</button>
            <button v-show="(indentData == 0 || indentData ==2)" @click="topayment">立即支付</button>
            <button v-show="(indentData == 1 || indentData == 3)">联系客服</button>
          </div>
        </div>
      </div>
      <div class="formErr" v-show="showCancels">
        <div class="formErr_wrap">
          <div class="form_txt_wrap">
            <div class="formErr_title">
              <h1>确定取消订单？</h1>
            </div>
            <div class="formErr_content">
              <p>确定取消该笔订单？取消后可在订单中心查看</p>
            </div>
          </div>

          <div class="formErr_btn">
            <div class="formErr_btn_left">
              <p @click="confirm">取消</p>
            </div>
            <div class="formErr_btn_right" @click="cancel2">
              <p>确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="IndentList">
      <div class="IndentList_top">
        <div class="IndentList_top_left">
          <p>订单编号：2020060414YM490231334</p>
        </div>
        <div class="IndentList_top_right">
          <p>待支付</p>
        </div>
      </div>
      <div class="IndentList_content">
        <div class="IndentList_content_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="IndentList_content_txt">
          <div class="IndentList_content_txt_title">
            <h1>厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</h1>
          </div>
          <div class="IndentList_content_txt_card">
            <div class="IndentList_content_txt_card_box">茶水间</div>
            <div class="IndentList_content_txt_card_box">路演厅</div>
          </div>
          <div class="IndentList_content_txt_mach">
            <p>250元/时起</p>
            <p>*4</p>
          </div>
        </div>
      </div>
      <div class="IndentList_bottom">
        <div class="IndentList_bottom_timer">
          <p>2020-06-30</p>
          <p>11:53</p>
        </div>
        <div class="IndentList_bottom_queding">
          <div class="IndentList_bottom_queding_mach">
            <h1>
              总金额：
              <span>¥1000.00</span>
            </h1>
          </div>
          <div
            :class="{IndentList_bottom_queding_btn:true,IndentList_bottom_queding_btn2:indentData == 3}"
          >
            <button v-show="indentData != 3" @click="cancel">取消订单</button>
            <button v-show="(indentData == 0 || indentData ==2)" @click="topayment">立即支付</button>
            <button v-show="(indentData == 1 || indentData == 3)">联系客服</button>
          </div>
        </div>
      </div>
      <div class="formErr" v-show="showCancels">
        <div class="formErr_wrap">
          <div class="form_txt_wrap">
            <div class="formErr_title">
              <h1>确定取消订单？</h1>
            </div>
            <div class="formErr_content">
              <p>确定取消该笔订单？取消后可在订单中心查看</p>
            </div>
          </div>

          <div class="formErr_btn">
            <div class="formErr_btn_left">
              <p @click="confirm">取消</p>
            </div>
            <div class="formErr_btn_right" @click="cancel2">
              <p>确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="IndentList">
      <div class="IndentList_top">
        <div class="IndentList_top_left">
          <p>订单编号：2020060414YM490231334</p>
        </div>
        <div class="IndentList_top_right">
          <p>待支付</p>
        </div>
      </div>
      <div class="IndentList_content">
        <div class="IndentList_content_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="IndentList_content_txt">
          <div class="IndentList_content_txt_title">
            <h1>厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</h1>
          </div>
          <div class="IndentList_content_txt_card">
            <div class="IndentList_content_txt_card_box">茶水间</div>
            <div class="IndentList_content_txt_card_box">路演厅</div>
          </div>
          <div class="IndentList_content_txt_mach">
            <p>250元/时起</p>
            <p>*4</p>
          </div>
        </div>
      </div>
      <div class="IndentList_bottom">
        <div class="IndentList_bottom_timer">
          <p>2020-06-30</p>
          <p>11:53</p>
        </div>
        <div class="IndentList_bottom_queding">
          <div class="IndentList_bottom_queding_mach">
            <h1>
              总金额：
              <span>¥1000.00</span>
            </h1>
          </div>
          <div
            :class="{IndentList_bottom_queding_btn:true,IndentList_bottom_queding_btn2:indentData == 3}"
          >
            <button v-show="indentData != 3" @click="cancel">取消订单</button>
            <button v-show="(indentData == 0 || indentData ==2)" @click="topayment">立即支付</button>
            <button v-show="(indentData == 1 || indentData == 3)">联系客服</button>
          </div>
        </div>
      </div>
      <div class="formErr" v-show="showCancels">
        <div class="formErr_wrap">
          <div class="form_txt_wrap">
            <div class="formErr_title">
              <h1>确定取消订单？</h1>
            </div>
            <div class="formErr_content">
              <p>确定取消该笔订单？取消后可在订单中心查看</p>
            </div>
          </div>

          <div class="formErr_btn">
            <div class="formErr_btn_left">
              <p @click="confirm">取消</p>
            </div>
            <div class="formErr_btn_right" @click="cancel2">
              <p>确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="IndentList">
      <div class="IndentList_top">
        <div class="IndentList_top_left">
          <p>订单编号：2020060414YM490231334</p>
        </div>
        <div class="IndentList_top_right">
          <p>待支付</p>
        </div>
      </div>
      <div class="IndentList_content">
        <div class="IndentList_content_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="IndentList_content_txt">
          <div class="IndentList_content_txt_title">
            <h1>厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</h1>
          </div>
          <div class="IndentList_content_txt_card">
            <div class="IndentList_content_txt_card_box">茶水间</div>
            <div class="IndentList_content_txt_card_box">路演厅</div>
          </div>
          <div class="IndentList_content_txt_mach">
            <p>250元/时起</p>
            <p>*4</p>
          </div>
        </div>
      </div>
      <div class="IndentList_bottom">
        <div class="IndentList_bottom_timer">
          <p>2020-06-30</p>
          <p>11:53</p>
        </div>
        <div class="IndentList_bottom_queding">
          <div class="IndentList_bottom_queding_mach">
            <h1>
              总金额：
              <span>¥1000.00</span>
            </h1>
          </div>
          <div
            :class="{IndentList_bottom_queding_btn:true,IndentList_bottom_queding_btn2:indentData == 3}"
          >
            <button v-show="indentData != 3" @click="cancel">取消订单</button>
            <button v-show="(indentData == 0 || indentData ==2)" @click="topayment">立即支付</button>
            <button v-show="(indentData == 1 || indentData == 3)">联系客服</button>
          </div>
        </div>
      </div>
      <div class="formErr" v-show="showCancels">
        <div class="formErr_wrap">
          <div class="form_txt_wrap">
            <div class="formErr_title">
              <h1>确定取消订单？</h1>
            </div>
            <div class="formErr_content">
              <p>确定取消该笔订单？取消后可在订单中心查看</p>
            </div>
          </div>

          <div class="formErr_btn">
            <div class="formErr_btn_left">
              <p @click="confirm">取消</p>
            </div>
            <div class="formErr_btn_right" @click="cancel2">
              <p>确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndentList",
  data() {
    return {
      cancels: false,
      showCancels: false
    };
  },
  props: ["indentData"],
  mounted() {

  },
  methods: {
    topayment() {
      this.$router.push("/payment");
    },
    showCancel() {
      this.showCancels = true;
    },
    confirm() {
      this.showCancels = false;
    },
    cancel() {
      this.showCancels = true;
    },
    cancel2() {
      this.showCancels = false;
    },
    toLiveDetails() {
      this.$router.push("/liveDetails");
    }
  }
};
</script>

<style lang="less" scoped>
div.IndentList {
  background: #ffffff;
  margin-top: 20px;
  div.IndentList_top {
    width: 100%;
    height: 69px;
    line-height: 69px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #dedede solid;
    padding: 0 30px;
    div.IndentList_top_left {
      p {
        font-size: 26px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
      }
    }

    div.IndentList_top_right {
      p {
        font-size: 26px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
      }
    }
  }

  div.IndentList_content {
    padding: 30px;
    display: flex;
    border-bottom: 1px solid #dedede;
    div.IndentList_content_img {
      width: 262px;
      height: 197px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div.IndentList_content_txt {
      width: 409px;
      margin-left: 20px;
      div.IndentList_content_txt_title {
        h1 {
          font-size: 26px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 37px;
        }
      }

      div.IndentList_content_txt_card {
        display: flex;
        margin-top: 32px;
        .IndentList_content_txt_card_box:nth-child(1) {
          margin-left: 0;
        }
        div.IndentList_content_txt_card_box {
          background: rgba(244, 244, 244, 1);
          margin-left: 10px;
          padding: 5px 16px;
          font-size: 22px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
          text-align: center;
        }
      }

      div.IndentList_content_txt_mach {
        margin-top: 11px;
        display: flex;
        p {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          line-height: 40px;
        }
        p:nth-child(2) {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #333333;
          line-height: 40px;
        }
      }
    }
  }

  div.IndentList_bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 50px 30px;
    div.IndentList_bottom_timer {
      display: flex;
      p {
        font-size: 26px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
        line-height: 37px;
      }
      p:nth-child(2) {
        margin-left: 20px;
      }
    }

    div.IndentList_bottom_queding {
      div.IndentList_bottom_queding_mach {
        height: 40px;
        h1 {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 40px;
          text-align: right;
          float: right;
        }
        span {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #fa9702;
          line-height: 40px;
          text-align: right;
        }
      }

      div.IndentList_bottom_queding_btn {
        margin-top: 20px;
        display: block;
        text-align: right;
        button {
          width: 163px;
          height: 60px;
          border-radius: 4px;
          border: 1px solid rgba(221, 221, 221, 1);
          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          margin-left: 20px;
          color: rgba(102, 102, 102, 1);
          line-height: 37px;
          background: rgba(0, 0, 0, 0);
        }
        button:nth-child(2) {
          border-radius: 4px;
          width: 143px;
          height: 60px;
          border: 1px solid #fa9702;

          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #fa9702;
          line-height: 37px;
        }
        button:nth-child(3) {
          border-radius: 4px;
          width: 143px;
          height: 60px;
          border: 1px solid #fa9702;

          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #fa9702;
          line-height: 37px;
        }
      }
    }
  }
}
.IndentList_bottom_queding_btn2 {
  float: right;
}
div.formErr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  div.formErr_wrap {
    width: 560px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .form_txt_wrap {
      height: 149px;
      div.formErr_title {
        h1 {
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 45px;
          text-align: center;
          margin-top: 20px;
        }
      }

      div.formErr_content {
        p {
          font-size: 22px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          text-align: center;
          margin-top: 25px;
          line-height: 30px;
        }
      }
    }

    div.formErr_btn {
      display: flex;
      height: 88px;
      border-top: 1px solid #f4f4f4;
      div.formErr_btn_left {
        flex: 1;
        height: 88px;
        line-height: 88px;
        border-right: 1px solid #f4f4f4;
        p {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          text-align: center;
        }
      }

      div.formErr_btn_right {
        height: 88px;
        line-height: 88px;
        flex: 1;
        p {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(250, 151, 2, 1);
          text-align: center;
        }
      }
    }
  }
}
.IndentList_bottom_queding_btn button:nth-child(1) {
  width: 163px !important;
  height: 60px !important;
  border-radius: 4px !important;
  border: 1px solid rgba(221, 221, 221, 1) !important;
}
.IndentList_bottom_queding_btn button:nth-child(2) {
  width: 163px !important;
  height: 60px !important;
  border-radius: 4px !important;
  border: 1px solid rgba(250, 151, 2, 1) !important;
}
.IndentList_bottom_queding_btn button:nth-child(3) {
  width: 163px !important;
  height: 60px !important;
  border-radius: 4px !important;
  border: 1px solid rgba(250, 151, 2, 1) !important;
}
</style>