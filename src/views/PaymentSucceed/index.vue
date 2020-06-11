<template>
  <div class="paymentSucceed">
    <div class="paymentSucceed_logo">
      <img src="../../assets/icon_apply_success.png" alt />
    </div>
    <div class="paymentSucceed_title">
      <h1>恭喜您，预订成功了</h1>
    </div>
    <div class="paymentSucceed_steps">
      <div class="paymentSucceed_steps_box">
        <div class="paymentSucceed_steps_box_left">
          <div class="yuan">1</div>
          <div class="xian"></div>
        </div>
        <div class="paymentSucceed_steps_box_right">
          <h1>下单预定</h1>
          <p>2020-06-10</p>
        </div>
      </div>
    </div>
    <div class="paymentSucceed_steps2">
      <div class="paymentSucceed_steps_box">
        <div class="paymentSucceed_steps_box_left">
          <div class="yuan">1</div>
          <div class="xian"></div>
        </div>
        <div class="paymentSucceed_steps_box_right">
          <h1>客服审核</h1>
          <p>审核通过后将会提交给管家</p>
        </div>
      </div>
    </div>
    <div class="paymentSucceed_steps3">
      <div class="paymentSucceed_steps_box">
        <div class="paymentSucceed_steps_box_left">
          <div class="yuan">1</div>
          <div class="xian"></div>
        </div>
        <div class="paymentSucceed_steps_box_right">
          <h1>管家与您联系</h1>
          <p>请尽量保持电话畅通</p>
        </div>
      </div>
    </div>
    <div class="paymentSucceed_btn1" @click="find">查看订单</div>
    <div class="paymentSucceed_btn2">联系客服</div>
  </div>
</template>

<script>
export default {
  name: "paymentSucceed",
  data() {
    return {
      active: 1
    };
  },
  methods:{
      find(){
          this.$router
      }
  }
};
</script>

<style lang="less" scoped>
div.paymentSucceed {
  padding-top: 90px;
  div.paymentSucceed_logo {
    width: 126px;
    height: 126px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.paymentSucceed_title {
    margin-top: 50px;
    h1 {
      font-size: 42px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 59px;
      text-align: center;
    }
  }
  div.paymentSucceed_steps {
    width: 350px;
    margin: auto;
    margin-top: 40px;
    .paymentSucceed_steps_box:nth-child(2) {
      height: 100px;
      display: flex;
      align-items: center;
      .xian {
        width: 2px;
        height: 100px;
      }
    }
    div.paymentSucceed_steps_box {
      position: relative;
      height: 80px;
      display: flex;
      div.paymentSucceed_steps_box_left {
        div.yuan {
          width: 36px;
          height: 36px;
          border-radius: 36px;
          z-index: 1;
          background: #fed18b;
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 33px;
          text-align: center;
        }
        .xian2 {
          width: 2px;
          height: 50px;
          background: #fcb548;
          margin-left: 15px;
          margin-top: -100px;
          position: absolute;
          right: 0;
        }

        div.xian {
          width: 2px;
          height: 50px;
          background: #fcb548;
          margin-left: 15px;
        }
      }

      div.paymentSucceed_steps_box_right {
        margin-left: 35px;
        h1 {
          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 37px;
        }

        p {
          font-size: 22px;
          color: #999999;
          margin-top: 5px;
        }
      }
    }
  }

  div.paymentSucceed_steps2 {
    width: 350px;
    margin: auto;
    margin-top: 6px;
    div.paymentSucceed_steps_box {
      height: 100px;
      display: flex;
      align-items: center;
      margin-top: 6px;
      div.paymentSucceed_steps_box_left {
        display: flex;
        align-items: center;
        div.yuan {
          width: 36px;
          height: 36px;
          border-radius: 36px;
          background: #d8d8d8;
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 33px;
          padding-left: -10px;
          text-align: center;
        }

        div.xian {
          width: 2px;
          height: 100px;
          background: #d8d8d8;
          margin-left: -21px;
        }
      }

      div.paymentSucceed_steps_box_right {
        margin-left: 55px;
        h1 {
          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 37px;
        }

        p {
          font-size: 22px;
          color: #999999;
          margin-top: 5px;
        }
      }
    }
  }

  div.paymentSucceed_steps3 {
          width: 350px;
    margin: auto;
  div.paymentSucceed_steps_box {
            height: 100px;
      display: flex;
      align-items: center;
    div.paymentSucceed_steps_box_left {
      div.yuan {
          width: 36px;
          z-index: 1;
          height: 36px;
          border-radius: 36px;
          background: #D8D8D8;
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 33px;
          text-align: center;
          margin-bottom: 13px;
      }

      div.xian {
          width: 2px;
          height: 50px;
          background: #D8D8D8;
          margin-left: 15px;
          margin-top: -100px;
      }
    }

    div.paymentSucceed_steps_box_right {
        margin-left: 35px;
      h1 {
        font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 37px;
      }

      p {
          font-size: 22px;
          color: #999999;
          margin-top: 5px;
      }
    }
  }
}

  div.paymentSucceed_btn1 {
    width: 630px;
    height: 88px;
    background: rgba(250, 151, 2, 1);
    border-radius: 6px;
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;
    margin: auto;
    margin-top: 98px;
  }

  div.paymentSucceed_btn2 {
    width: 630px;
    height: 88px;
    border-radius: 6px;
    border: 1px solid rgba(250, 151, 2, 1);
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(250, 151, 2, 1);
    line-height: 88px;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }
}
</style>