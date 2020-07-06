<template>
  <div class="orderform">
    <div class="orderform_top padd">
      <contentList />
      <div class="kong"></div>
    </div>
    <div class="orderform_timer padd">
      <div class="orderform_timer_left">
        <p>开始时间</p>
        <p>{{startTime.week}}</p>
        <p>{{startTime.time}}</p>
      </div>
      <div class="xianxian"></div>
      <div class="orderform_timer_cent">
        <p>共{{duration}}小时</p>
      </div>
      <div class="orderform_timer_left">
        <p>离开时间</p>
        <p>{{overTime.week}}</p>
        <p>{{overTime.time}}</p>
      </div>
    </div>
    <div class="orderform_name padd">
      <div class="orderform_name_title">
        <p>预订人</p>
      </div>
      <div class="orderform_name_wrap">
        <div class="orderform_name_wrap_left">
          <img src="../../assets/icon_people_nor.png" alt />
          <p>{{formData.name}}</p>
        </div>
        <div class="orderform_name_wrap_right">
          <p>{{formData.phone}}</p>
        </div>
      </div>
    </div>
    <div class="orderform_money padd">
      <div class="orderform_money_top">
        <div class="orderform_money_top_left">
          <h1>房租总额（{{duration}}小时）</h1>
          <p>{{startTime.week}} {{startTime.time}}-{{overTime.time}}</p>
        </div>
        <div class="orderform_money_top_right">
          <h1>{{liveDatas.rent * duration}}</h1>
          <p>¥{{liveDatas.rent}}*{{duration}}</p>
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
          <h1>¥{{liveDatas.deposit}}</h1>
        </div>
      </div>
      <div class="orderform_money_top" @click="showCouponWrap">
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
      <div
        class="orderform_wrap_right"
      >¥{{Number(liveDatas.rent * duration) + Number(liveDatas.deposit)}}</div>
    </div>
    <div class="orderform_agreement">
      <img src="../../assets/icon_jinggao_nor.png" alt />
      <p>
        预订代表您同意
        <span @click="toAgreement2">《平台服务协议》</span>
      </p>
    </div>
    <div class="orderform_bottom padd">
      <div class="orderform_bottom_box orderform_bottom_txt">
        <p>
          订单总额
          <span>¥{{Number(liveDatas.rent * duration) + Number(liveDatas.deposit)}}</span>
        </p>
        <h1>(含押金，已优惠¥{{liveDatas.deposit}})</h1>
      </div>
      <div class="orderform_bottom_box">
        <button @click="submit">提交订单</button>
      </div>
    </div>
    <div class="coupon" v-show="showCoupon">
      <div class="coupon_wrap">
        <div class="coupon_wrap_title">
          <h1>优惠劵</h1>
          <p class="title_img" src="zhibo_icon_close_nor.png" @click="closeCoupon" />
        </div>
        <div class="coupon_wrap_content">
          <van-tabs v-model="active">
            <van-tab title="可用优惠券(3)">
              <div class="couponUnused_box">
                <div class="couponUnused_box_left">
                  <h1>
                    <span>¥</span>100.00
                  </h1>
                  <p>满1000元可用</p>
                </div>
                <div class="couponUnused_box_right">
                  <h1>服装电商直播基地专用抵扣券</h1>
                  <p>
                    <van-radio-group v-model="radio">
                      <van-radio name="1" icon-size="24px">
                        <p>2020-06-01至2020-06-25</p>
                        <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
                      </van-radio>
                    </van-radio-group>
                  </p>
                </div>
              </div>
              <div class="couponUnused_box">
                <div class="couponUnused_box_left">
                  <h1>
                    <span>¥</span>100.00
                  </h1>
                  <p>满1000元可用</p>
                </div>
                <div class="couponUnused_box_right">
                  <h1>服装电商直播基地专用抵扣券</h1>
                  <p>
                    <van-radio-group v-model="radio">
                      <van-radio name="2" icon-size="24px">
                        <p>2020-06-01至2020-06-25</p>
                        <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
                      </van-radio>
                    </van-radio-group>
                  </p>
                </div>
              </div>
              <div class="van_none">
                <van-radio-group v-model="radio">
                  <van-radio name="3" icon-size="24px">
                    <p>不使用优惠券</p>
                    <img slot="icon" src="../../assets/icon_gou_nor.png" alt />
                  </van-radio>
                </van-radio-group>
              </div>
            </van-tab>
            <van-tab title="不可用优惠券(3)">
              <CouponPast />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentList from "../../components/ContentList/index";
import couponUnused from "../../components/CouponUnused/index";
import CouponPast from "../../components/CouponPast/index";
import { mapGetters } from "vuex";

export default {
  name: "orderform",
  data() {
    return {
      active: -1,
      showCoupon: false,
      radio: "1",
      liveDatas: {},
      formData: {},
      startTime: {},
      overTime: {},
      duration: ""
    };
  },
  mounted() {
    // 直播列表信息
    this.liveDatas = JSON.parse(window.sessionStorage.getItem("liveDatas"));
    // 个人信息
    this.formData = JSON.parse(window.sessionStorage.getItem("formData"));
    // 开始时间
    this.startTime = JSON.parse(window.sessionStorage.getItem("startTime"));
    // 结束时间
    this.overTime = JSON.parse(window.sessionStorage.getItem("overTime"));
    // 总共时长
    this.duration = JSON.parse(window.sessionStorage.getItem("duration"));
  },
  computed: {
    ...mapGetters([
      "getStartTime",
      "getOverTime",
      "getFormData",
      "getLiveDatas",
      "getDuration"
    ])
  },
  components: {
    contentList,
    couponUnused,
    CouponPast
  },
  methods: {
    submit() {
      let para = {
        id: this.liveDatas.id,
        name: this.formData.name,
        phone: this.formData.phone,
        real_money:
          Number(this.liveDatas.rent * this.duration) +
          Number(this.liveDatas.deposit),
        money:
          Number(this.liveDatas.rent * this.duration) +
          Number(this.liveDatas.deposit),
        deposit_money: this.liveDatas.deposit,
        discount_money: null,
        discount_id: null,
        begin_time: this.startTime.time,
        end_time: this.overTime.time,
        use_date: this.startTime.week,
        order_name: this.liveDatas.sapce_live_name
      };
      console.log(111)
      window.sessionStorage.setItem('money',(Number(this.liveDatas.rent * this.duration) + Number(this.liveDatas.deposit)))
      console.log(para);
      this.$api.liveList.purchase(para).then(res => {
        console.log("下单！！")
        console.log(res)
        if (res.data.code === 200) {
          this.$router.push("/payment");
        }
      });
    },
    toYajin() {
      this.$router.push("/guarantee");
    },
    toAgreement1() {
      this.$router.push("/agreement");
    },
    showCouponWrap() {
      this.showCoupon = true;
    },
    closeCoupon() {
      this.showCoupon = false;
    },
    toAgreement2() {
      this.$router.push("/platformAgreement");
    }
  }
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}

div.couponUnused_box {
  width: 90%;
  margin: auto;
  margin-top: 30px;
  height: 200px;
  background: url("../../assets/img_quan_press.png") no-repeat center;
  background-size: 100%;
  display: flex;
  div.couponUnused_box_left {
    width: 240px;
    text-align: center;
    h1 {
      font-size: 52px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(250, 151, 2, 1);
      line-height: 33px;
      margin-top: 62px;
      span {
        font-size: 24px;
      }
    }

    p {
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 30px;
      margin-top: 20px;
    }
  }

  div.couponUnused_box_right {
    flex: 3;
    padding-left: 30px;
    h1 {
      font-size: 28px;
      margin-top: 59px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 40px;
    }

    p {
      font-size: 20px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 28px;
      margin-top: 24px;
      input {
        width: 36px;
        height: 36px;
        border: 1px solid #c7c7c7;
        float: right;
        margin-right: 20px;
      }
    }
  }
}
.couponUnused_box:nth-child(1) {
  margin-top: 30px !important;
}

.orderform {
  padding-bottom: 130px;
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
            margin-top: 4px;
            margin-bottom: -2px;
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
            margin-left: 8px;
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
    position: fixed;
    bottom: 0;
    z-index: 22;
    background: white;
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
div.coupon {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 23;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  div.coupon_wrap {
    width: 100%;
    background: white;
    overflow-y: auto;
    height: 921px;
    position: fixed;

    bottom: 0;

    div.coupon_wrap_title {
      height: 108px;
      line-height: 108px;
      padding: 0 30px;
      background: white;
      border: none;
      position: relative;
      h1 {
        font-size: 34px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }

      img {
      }
    }
  }
}
.coupon_wrap_content {
  background: white;
}
.title_img {
  width: 30px;
  height: 30px;
  // background: red;
  background: url("../../assets/zhibo_icon_close_nor.png") no-repeat center;
  background-size: 100%;
  position: absolute;
  right: 32px;
  z-index: 1;
  top: 45px;
}
div.van_none {
  display: flex;
  padding: 0 50px 0 30px;
  justify-content: space-between;
  margin-top: 30px;
  div.van_none_left {
    p {
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 40px;
    }
  }

  div.van_none_right {
    input {
      width: 36px;
      height: 36px;
      border: 1px solid rgba(199, 199, 199, 1);
    }
  }
}
</style>

<style scoped>
.orderform >>> .van_none {
}
.orderform >>> .van-radio {
  height: 60px;
  margin-left: 0;
  margin-top: -18px;
  padding-right: 30px !important;
}
.orderform >>> .van-radio__label p {
  margin-left: 0;
  margin-top: 0px !important;
}
.orderform >>> .van-radio__label {
  margin-left: 0;
}
.orderform >>> .van-radio__icon--round img {
}
.orderform >>> .van-radio-group {
  width: 100%;
}
.orderform >>> .orderform {
  background: red;
}
.van_none >>> .van-radio {
  padding-right: 20px !important;
}
.van_none >>> .van-radio__label p {
  font-size: 28px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.orderform >>> .couponUnused_box_right p {
  margin-top: 18px !important;
}
.couponUnused_box_right >>> .van-radio__label p {
  margin-top: 13px !important;
}
.couponUnused_box_right >>> .van-radio__label {
  margin-top: 15px;
}
.orderform >>> .van-radio__icon--checked {
  margin-top: 20px;
}
.orderform >>> .couponUnused_box_left p {
}
</style>