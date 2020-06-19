<template>
  <div class="orderform">
    <div class="orderform_top padd">
      <contentList />
      <div class="kong"></div>
    </div>
    <div class="orderform_timer padd">
      <div class="orderform_timer_left">
        <p>开始时间</p>
        <p>周三 06/01</p>
        <p>15:00</p>
      </div>
      <div class="xianxian"></div>
      <div class="orderform_timer_cent">
        <p>共5小时</p>
      </div>
      <div class="orderform_timer_left">
        <p>离开时间</p>
        <p>周三 06/01</p>
        <p>20:00</p>
      </div>
    </div>
    <div class="orderform_name padd">
      <div class="orderform_name_title">
        <p>预订人</p>
      </div>
      <div class="orderform_name_wrap">
        <div class="orderform_name_wrap_left">
          <img src="../../assets/icon_people_nor.png" alt />
          <p>王女士</p>
        </div>
        <div class="orderform_name_wrap_right">
          <p>174****4561</p>
        </div>
      </div>
    </div>
    <div class="orderform_money padd">
      <div class="orderform_money_top">
        <div class="orderform_money_top_left">
          <h1>房租总额（5小时）</h1>
          <p>06/01 15:00-20:00</p>
        </div>
        <div class="orderform_money_top_right">
          <h1>¥1250.00</h1>
          <p>¥250.00*5</p>
        </div>
      </div>
      <div class="orderform_money_top">
        <div class="orderform_money_top_left">
          <h1>
            押金
            <img src="../../assets/con_icon_ques.png" alt @click="toYajin" />
          </h1>
          <p>正常退房后押金将退回</p>
        </div>
        <div class="orderform_money_top_right">
          <h1>¥200.00</h1>
        </div>
      </div>
      <div class="orderform_money_top">
        <div class="orderform_money_top_left">
          <h1>优惠券</h1>
        </div>
        <div class="orderform_money_top_right">
          <h1>
            -¥200.00
            <img src="../../assets/icon_link_nor.png" alt />
          </h1>
        </div>
      </div>
    </div>
    <div class="orderform_wrap padd">
      <div class="orderform_wrap_left">合计总金额</div>
      <div class="orderform_wrap_right">¥1250.00</div>
    </div>
    <div class="orderform_agreement">
      <img src="../../assets/icon_jinggao_nor.png" alt />
      <p>
        预订代表您同意
        <span>《平台服务协议》</span>
      </p>
    </div>
    <div class="orderform_bottom padd">
      <div class="orderform_bottom_box orderform_bottom_txt">
        <p>
          订单总额
          <span>¥1250.00</span>
        </p>
        <h1>(含押金，已优惠¥200.00)</h1>
      </div>
      <div class="orderform_bottom_box">
        <button @click="submit">提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import contentList from "../../components/ContentList/index";

export default {
  name: "orderform",
  components: {
    contentList
  },
  methods: {
    submit() {
      this.$router.push("/payment");
    },
    toYajin(){
      this.$router.push("/guarantee")
    }
  }
};
</script>

<style lang="less" scoped>
.orderform {
  .orderform_top {
    .kong {
      width: 100%;
      border-bottom: 1px solid rgba(222, 222, 222, 1);
    }
  }
  .orderform_timer {
    width: 100%;
    height: 211px;
    position: relative;
    display: flex;
    padding: 31px 88px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(222, 222, 222, 1);
    .orderform_timer_left {
      width: 180px;
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
    .orderform_timer_cent {
      width: 90px;
      margin-top: 60px;
      height: 33px;
      line-height: 33px;
      background: #fff;
      z-index: 2;
      p {
        font-size: 24px;
        background: #fff;
        z-index: 22;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(250, 151, 2, 1);
      }
    }
  }
  .orderform_name {
    width: 100%;
    height: 129px;
    margin-top: 40px;
    border-bottom: 1px solid rgba(222, 222, 222, 1);
    .orderform_name_title {
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 550;
      color: rgba(51, 51, 51, 1);

      line-height: 45px;
    }
    .orderform_name_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .orderform_name_wrap_left {
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
      .orderform_name_wrap_right {
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
  .orderform_money {
    border-bottom: 1px solid rgba(222, 222, 222, 1);
    padding-bottom: 36px;
    .orderform_money_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .orderform_money_top_left {
        h1 {
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 45px;
          img {
            width: 32px;
            height: 32px;
            margin-left: 15px;
          }
        }
        p {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          margin-top: 20px;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          line-height: 33px;
        }
      }
      .orderform_money_top_right {
        text-align: right;
        h1 {
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 45px;
          img {
            width: 16px;
            height: 28px;
            margin-left: 28px;
          }
        }
        p {
          font-size: 24px;
          margin-top: 20px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          line-height: 33px;
        }
      }
    }
  }
  .orderform_wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 78px;
    .orderform_wrap_left {
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 45px;
    }
    .orderform_wrap_right {
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(250, 151, 2, 1);
      line-height: 45px;
      text-align: right;
    }
  }
  .orderform_agreement {
    width: 100;
    height: 100px;
    line-height: 100px;
    display: flex;
    padding: 0 30px;
    background: rgba(244, 244, 244, 1);
    img {
      width: 32px;
      height: 32px;
      margin-top: 34px;
    }
    p {
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      margin-left: 20px;
      span {
        color: rgba(250, 151, 2, 1);
      }
    }
  }
  .orderform_bottom {
    box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
    height: 130px;
    padding: 21px 30px 25px 30px;
    display: flex;
    .orderform_bottom_box {
      width: 50%;
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
        span {
          font-size: 32px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(250, 151, 2, 1);
          line-height: 45px;
          margin-left: 54px;
        }
      }
      h1 {
        font-size: 22px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
        margin-top: 4px;
      }
      button {
        width: 330px;
        height: 88px;
        background: rgba(250, 151, 2, 1);
        border-radius: 6px;
        border: none;
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 45px;
        margin-left: 10px;
      }
    }
    .orderform_bottom_txt {
      margin-top: 5px;
    }
  }
}
.padd {
  padding: 0 30px;
}
.xianxian {
  width: 1px;
  height: 150px;
  background: rgba(222, 222, 222, 1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>