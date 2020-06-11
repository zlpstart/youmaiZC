<template>
  <div class="havePaid">
    <div class="havePaid_top">
      <div class="havePaid_top_wrap padd" v-if="showTitle">
        <p>
          订单已支付
          <span>（订单已支付成功）</span>
        </p>
      </div>
      <div class="havePaid_top_wrap padd" v-if="!showTitle">
        <p>
          订单待支付
          <span>（剩余<b>00:29:32</b>未支付订单江自动关闭）</span>
        </p>
      </div>
    </div>
    <div class="havePaid_timeCard padd">
      <div class="havePaid_timeCard_box">
        <p>开始时间</p>
        <p>周三 06/01</p>
        <p>15:00</p>
      </div>
      <div class="havePaid_timeCard_center">共5小时</div>
      <div class="havePaid_timeCard_box">
        <p>离开时间</p>
        <p>周三 06/01</p>
        <p>20:00</p>
      </div>
    </div>
    <div class="havePaid_import padd">
      <contentList />
    </div>
    <div class="havePaid_name padd">
      <div class="havePaid_name_title">
        <p>预定人</p>
      </div>
      <div class="havePaid_name_content">
        <div class="havePaid_name_content_left">
          <img src="../../assets/icon_people_nor.png" alt />
          <p>王女士</p>
        </div>
        <div class="havePaid_name_content_right">
          <p>174****4561</p>
        </div>
      </div>
    </div>
    <div class="havePaid_form padd">
      <div class="havePaid_form_box">
        <div class="havePaid_form_box_left">
          <p>订单编号</p>
        </div>
        <div class="havePaid_form_box_right">
          <p>2020060414YM490231334</p>
        </div>
      </div>
      <div class="havePaid_form_box">
        <div class="havePaid_form_box_left">
          <p>下单时间</p>
        </div>
        <div class="havePaid_form_box_right">
          <p>2020-06-01 16:25:29</p>
        </div>
      </div>
      <div class="havePaid_form_box_money">
        <div class="havePaid_form_box_money_title">
          <div class="havePaid_form_box_money_title_left">
            <p>订单总额</p>
          </div>
          <div class="havePaid_form_box_money_title_right">
            <p>¥1250.00</p>
          </div>
        </div>
        <div class="havePaid_form_box_money_li">
          <div class="havePaid_form_box_money_li_left">
            <p>房租费用(5小时)</p>
          </div>
          <div class="havePaid_form_box_money_li_right">
            <p>¥1250.00</p>
          </div>
        </div>
        <div class="havePaid_form_box_money_li">
          <div class="havePaid_form_box_money_li_left">
            <p>押金</p>
          </div>
          <div class="havePaid_form_box_money_li_right">
            <p>¥200.00</p>
          </div>
        </div>
        <div class="havePaid_form_box_money_li">
          <div class="havePaid_form_box_money_li_left">
            <p>优惠券</p>
          </div>
          <div class="havePaid_form_box_money_li_right">
            <p>-¥200.00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="havePaid_btn padd">
      <div class="havePaid_btn1">取消订单</div>
      <div class="havePaid_btn2">联系客服</div>
    </div>
  </div>
</template>

<script>
import contentList from "../../components/ContentList/index";

export default {
  name: "",
  data() {
    return {
      showTitle: true
    };
  },
  components: {
    contentList
  }
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}
div.havePaid {
  div.havePaid_top {
    width: 100%;
    div.havePaid_top_wrap {
      width: 750px;
      height: 220px;
      background: #ffac2f;
      padding-top: 35px;
      p {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 45px;
        span {
          font-size: 24px;
          font-family: Medium;
          b {
              font-size: 32px;
          }
        }
      }
    }
  }

  div.havePaid_timeCard {
    width: 690px;
    height: 211px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 4px 11px 0px rgba(0, 0, 0, 0.09);
    border-radius: 16px;
    margin: auto;
    margin-top: -96px;
    display: flex;
    justify-content: space-between;
    padding: 31px 88px 30px 88px;
    div.havePaid_timeCard_box {
      text-align: center;
      p:nth-child(1) {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 33px;
      }
      p:nth-child(2) {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
        line-height: 45px;
        margin-top: 17px;
      }
      p:nth-child(3) {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 45px;
        margin-top: 10px;
      }
    }

    div.havePaid_timeCard_center {
      font-size: 24px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(250, 151, 2, 1);
      line-height: 33px;
      display: flex;
      align-items: center;
    }
  }

  div.havePaid_import {
    margin-top: 40px;
  }

  div.havePaid_name {
    margin-top: 40px;
    div.havePaid_name_title {
      p {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 45px;
      }
    }

    div.havePaid_name_content {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dedede;
      margin-top: 20px;
      padding-bottom: 30px;
      div.havePaid_name_content_left {
        display: flex;
        img {
          width: 33px;
          height: 33px;
        }

        p {
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          line-height: 33px;
          margin-left: 20px;
        }
      }

      div.havePaid_name_content_right {
        p {
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          line-height: 33px;
        }
      }
    }
  }

  div.havePaid_form {
    div.havePaid_form_box {
      display: flex;
      height: 88px;
      line-height: 88px;
      justify-content: space-between;
      div.havePaid_form_box_left {
        p {
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
      }

      div.havePaid_form_box_right {
        p {
          font-size: 24px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
        }
      }
    }

    div.havePaid_form_box_money {
      div.havePaid_form_box_money_title {
        display: flex;
        line-height: 88px;
        justify-content: space-between;
        div.havePaid_form_box_money_title_left {
          p {
            font-size: 32px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
        }

        div.havePaid_form_box_money_title_right {
          p {
            font-size: 32px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: rgba(250, 151, 2, 1);
          }
        }
      }

      div.havePaid_form_box_money_li {
        height: 70px;
        display: flex;
        justify-content: space-between;
        line-height: 70px;
        padding: 0 19px 0 21px;
        margin-top: -5px;
        div.havePaid_form_box_money_li_left {
          p {
            font-size: 24px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
          }
        }

        div.havePaid_form_box_money_li_right {
          p {
            font-size: 24px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
  }
  .havePaid_btn {
    display: flex;
    justify-content: space-between;
    margin-top: 54px;
    align-items: center;
    height: 130px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
    .havePaid_btn1 {
      width: 330px;
      height: 88px;
      background: rgba(234, 234, 234, 1);
      border-radius: 6px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(199, 199, 199, 1);
      line-height: 88px;
      text-align: center;
    }
    .havePaid_btn2 {
      width: 330px;
      height: 88px;
      background: rgba(255, 186, 21, 1);
      border-radius: 6px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
      text-align: center;
    }
  }
}
</style>