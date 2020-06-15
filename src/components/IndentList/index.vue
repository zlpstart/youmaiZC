<template>
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
          <h1>总金额：</h1>
          <p>¥1000.00</p>
        </div>
        <div class="IndentList_bottom_queding_btn">
          <button>取消订单</button>
          <button>立即支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndentList",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
div.IndentList {
    background: #FFFFFF;
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
        display: flex;
        h1 {
            margin-left: 70px;
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 40px;
        }
        p {
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: #fa9702;
          line-height: 40px;
        }
      }

      div.IndentList_bottom_queding_btn {
        margin-top: 20px;
        button {
          padding: 12px 20px;
          border-radius: 4px;
          border: 1px solid rgba(221, 221, 221, 1);
          font-size: 26px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 37px;
          background: rgba(0, 0, 0, 0);
        }
        button:nth-child(2) {
          padding: 12px 20px;
          border-radius: 4px;
          border: 1px solid #fa9702;
          margin-left: 20px;
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
</style>