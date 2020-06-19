<template>
  <div class="user">
    <div class="user_top padd">
      <div class="user_top_message">
        <div class="user_top_message_left">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="user_top_message_right">
          <div class="user_top_message_right_phone">
            <p>174****2310</p>
          </div>
          <div class="user_top_message_right_card">
            <img src="../../assets/vip_icon_vip_nor.png" alt />
            <p>有麦会员</p>
          </div>
        </div>
      </div>
      <div class="user_top_list">
        <div class="user_top_list_box" @click="toWallet">
          <h1>1200</h1>
          <p>余额（元）</p>
        </div>
        <div class="user_top_list_box" @click="toCoupon">
          <h1>4</h1>
          <p>优惠券</p>
        </div>
        <div class="user_top_list_box" @click="toAttention">
          <h1>14</h1>
          <p>已关注</p>
        </div>
      </div>
    </div>
    <div class="user_privilege padd">
      <div class="user_privilege_list">
        <div class="user_privilege_list_box">
          <div class="user_privilege_list_box_img">
            <img src="../../assets/vip_icon_hongbao.png" alt />
          </div>
          <div class="user_privilege_list_box_txt">
            <p>每周券包</p>
          </div>
        </div>
        <div class="user_privilege_list_box">
          <div class="user_privilege_list_box_img">
            <img src="../../assets/vip_icon_baoxiu.png" alt />
          </div>
          <div class="user_privilege_list_box_txt">
            <p>报修服务</p>
          </div>
        </div>
        <div class="user_privilege_list_box">
          <div class="user_privilege_list_box_img">
            <img src="../../assets/vip_icon_gongxiang.png" alt />
          </div>
          <div class="user_privilege_list_box_txt">
            <p>共享服务</p>
          </div>
        </div>
        <div class="user_privilege_list_box">
          <div class="user_privilege_list_box_img">
            <img src="../../assets/vip_icon_tequan.png" alt />
          </div>
          <div class="user_privilege_list_box_txt">
            <p>尊贵特权</p>
          </div>
        </div>
        <div class="user_privilege_list_box">
          <div class="user_privilege_list_box_img">
            <img src="../../assets/vip_icon_company.png" alt />
          </div>
          <div class="user_privilege_list_box_txt">
            <p>企业服务</p>
          </div>
        </div>
      </div>
      <div class="user_privilege_bottom">
        <div class="user_privilege_bottom_left">
          <div class="user_privilege_bottom_left_img">
            <img src="../../assets/vip_icon_vip_nor.png" alt />
          </div>
          <div class="user_privilege_bottom_left_txt">
            <p>有麦会员专属特权</p>
          </div>
        </div>
        <div class="user_privilege_bottom_right">
          <p>查看特权</p>
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
    </div>
    <div class="user_list padd">
      <div class="user_list_box" @click="toWallet">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_wallet.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>我的钱包</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
      <div class="user_list_box" @click="toCoupon">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_quan_nor.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>我的优惠券</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
      <div class="user_list_box" @click="toAttention">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_guanzhu_nor.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>我的关注</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
      <div class="user_list_box" @click="toAboutToSee">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_yuekan_nor.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>我的约看</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
      <div class="user_list_box" @click="toIndent">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_order_nor.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>我的订单</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
      <div class="user_list_box" @click="toAbout">
        <div class="user_list_box_left">
          <div class="user_list_box_left_img">
            <img src="../../assets/vip_icon_about us_nor.png" alt />
          </div>
          <div class="user_list_box_left_txt">
            <p>关于我们</p>
          </div>
        </div>
        <div class="user_list_box_right">
          <img src="../../assets/icon_link_nor.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  methods: {
    toWallet() {
      console.log(111);
      this.$router.push("/wallet");
    },
    toCoupon(){
      this.$router.push("/coupon")
    },
    toAttention(){
      this.$router.push('/attention')
    },
    toIndent(){
      this.$router.push('/indent')
    },
    toAboutToSee(){
      this.$router.push("/aboutToSee")
    },
    toAbout(){
      this.$router.push('/about')
    }
  }
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}
div.user {
  div.user_top {
    width: 690px;
    height: 359px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.09);
    border-radius: 6px;
    margin: auto;
    margin-top: 30px;
    padding: 30px;
    div.user_top_message {
      display: flex;
      div.user_top_message_left {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }

      div.user_top_message_right {
        margin-left: 20px;
        .user_top_message_right_phone {
          p {
            font-size: 34px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 48px;
          }
        }
        .user_top_message_right_card {
          width: 154px;
          height: 44px;
          margin-top: 8px;
          background: #e9c794;
          line-height: 44px;
          border-radius: 6px;
          display: flex;
          padding-left: 8px;
          img {
            width: 26px;
            height: 24px;
            margin-top: 10px;
          }
          p {
            font-size: 26px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            margin-left: 7px;
            color: rgba(151, 95, 11, 1);
          }
        }
      }
    }

    div.user_top_list {
      margin-top: 75px;
      display: flex;
      .user_top_list_box:nth-child(2) {
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
      }
      div.user_top_list_box {
        width: 230px;
        height: 70px;
        text-align: center;
        // padding: 24px;
        h1 {
          font-size: 36px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 50px;
        }

        p {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          line-height: 33px;
        }
      }
    }
  }

  div.user_privilege {
    width: 630px;
    height: 223px;
    margin: auto;
    margin-top: -48px;
    padding: 41px 36px 23px 36px;
    background: url("../../assets/vip_img_bg.png") no-repeat center;
    background-size: 100%;
    div.user_privilege_list {
      display: flex;
      justify-content: space-between;
      div.user_privilege_list_box {
        div.user_privilege_list_box_img {
          height: 55px;
          width: 55px;
          margin: auto;
          img {
            width: 91%;
            height: 91%;
          }
        }

        div.user_privilege_list_box_txt {
          margin-top: 16px;
          p {
            font-size: 20px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(151, 95, 11, 1);
            line-height: 28px;
          }
        }
      }
    }

    div.user_privilege_bottom {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      div.user_privilege_bottom_left {
        display: flex;
        justify-content: space-between;
        div.user_privilege_bottom_left_img {
          width: 26px;
          height: 24px;
          img {
            width: 100%;
            height: 100%;
            margin-top: 3px;
          }
        }

        div.user_privilege_bottom_left_txt {
          margin-left: 18px;
          p {
            font-size: 24px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 33px;
          }
        }
      }

      div.user_privilege_bottom_right {
        display: flex;
        p {
          font-size: 24px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 33px;
          margin-right: 15px;
        }

        img {
          width: 13px;
          height: 22px;
          margin-top: 5px;
        }
      }
    }
  }

  div.user_list {
    margin-top: 40px;
    div.user_list_box {
      widows: 100%;
      height: 88px;
      line-height: 88px;
      display: flex;
      justify-content: space-between;
      div.user_list_box_left {
        display: flex;
        div.user_list_box_left_img {
          width: 42px;
          height: 42px;
          img {
            margin-top: 20px;
            width: 100%;
            height: 100%;
          }
        }

        div.user_list_box_left_txt {
          margin-left: 23px;
          p {
            font-size: 26px;
            font-family: PingFang-SC-Bold, PingFang-SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
        }
      }

      div.user_list_box_right {
        width: 13px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>