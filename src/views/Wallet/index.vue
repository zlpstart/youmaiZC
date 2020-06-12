<template>
  <div class="wallet">
    <div class="wallet_top">
      <div class="wallet_top_p">
        <p>当前可用余额（元）</p>
      </div>
      <div class="wallet_top_h1">
        <h1>¥300，000.00</h1>
      </div>
      <div class="wallet_top_btn">
        <button>去充值</button>
        <button>收支明细</button>
      </div>
    </div>
    <div class="wallet_refill padd">
      <div class="wallet_refill_title">
        <h1>充值金额</h1>
      </div>
      <div class="wallet_refill_wrap">
        <div class="wallet_refill_wrap_box">
            <p>3000元</p>
        </div>
        <div class="wallet_refill_wrap_box">
            <p>5000元</p>
        </div>
        <div class="wallet_refill_wrap_box">
            <p>8000元</p>
            <p>送<span>100</span>元</p>
        </div>
      </div>
    </div>
    <div class="wallet_payment padd">
      <div class="wallet_payment_title">
        <h1>选择支付方式</h1>
      </div>
      <div class="wallet_payment_li">
        <div class="payment_list">
          <van-radio-group v-model="radio">
            <van-radio name="1" icon-size="24px">
              <img src="../../assets/img_vip.png" alt />
              <p>会员支付</p>
            </van-radio>
            <van-radio name="2" icon-size="24px">
              <img src="../../assets/img-weixin.png" alt />
              <p>微信支付</p>
            </van-radio>
            <van-radio name="3" icon-size="24px">
              <img src="../../assets/icon-zhifubao-nor@3x.png" alt />
              <p>支付宝支付</p>
            </van-radio>
            <van-radio name="4" icon-size="24px">
              <img src="../../assets/logo-header.png" alt />
              <p>快钱支付</p>
            </van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="wallet_hint padd">
        <div class="wallet_hint_left">
            <img src="../../assets/wallet_icon_jinggao_nor.png" alt="">
        </div>
        <div class="wallet_hint_right">
            <p>点击立即充值，代表您同意<span>《充值活动协议》</span></p>
        </div>
    </div>
    <div class="wallet_affirm padd">
        <div class="wallet_affirm_left">
            <p>共计</p>
            <h1>¥5000.00</h1>
        </div>
        <div class="wallet_affirm_right">
            立即充值
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return {
            radio: "1"
        }
    }
};
</script>

<style lang="less" scoped>
.padd {
    padding: 0 30px;
}
div.payment_list {
  padding: 0 30px;
}
.payment_btn {
  width: 690px;
  height: 88px;
  background: rgba(250, 151, 2, 1);
  border-radius: 6px;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 34px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 88px;
}

div.wallet {
  div.wallet_top {
      width: 100%;
      padding-left: 60px;
      height: 475px;
      background: url('../../assets/wallet_bg.png')no-repeat center;
      background-size: 100%;
      padding-top: 100px;
    div.wallet_top_p {
      p {
          font-size:26px;
font-family:PingFang-SC-Medium,PingFang-SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:37px;
      }
    }

    div.wallet_top_h1 {
        margin-top: 20px;
      h1 {
          font-size:48px;
font-family:PingFang-SC-Heavy,PingFang-SC;
font-weight:800;
color:rgba(255,255,255,1);
line-height:67px;
      }
    }

    div.wallet_top_btn {
        margin-top: 59px;
        
      button {
          border-radius:30px;
border:1px solid rgba(255,255,255,1);
padding: 8px 27px;
font-size:30px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(255,255,255,1);
text-align: center;
      }
    }
  }

  div.wallet_refill {
      margin-top: 40px;
    div.wallet_refill_title {
      h1 {
          font-size:36px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:50px;
      }
    }

    div.wallet_refill_wrap {
        margin-top: 30px;
        height: 140px;
        display: flex;
        justify-content: space-between;
      div.wallet_refill_wrap_box {
        p {
            border-radius:6px;
border:1px solid rgba(222,222,222,1);
font-size:36px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:50px;
        }
        p:nth-child(2){
            font-size:24px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(51,51,51,1);
span {
    color: #FA9702;
    font-size:24px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
}
        }
      }
    }
  }

  div.wallet_payment {
      margin-top: 50px;
    div.wallet_payment_title {
      h1 {
          font-size:36px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:50px;

      }
    }

    div.wallet_payment_li {
      div.payment_list {
        van-radio-group {
          van-radio {
            img {

            }

            p {

            }
          }
        }
      }
    }
  }

  div.wallet_hint {
      margin-top: 30px;
      display: flex;
    div.wallet_hint_left {
      img {
          width: 32px;
          height: 32px;
          margin-top: 34px;
      }
    }

    div.wallet_hint_right {
      p {
          font-size:24px;
font-family:PingFang-SC-Medium,PingFang-SC;
font-weight:500;
color:rgba(102,102,102,1);
line-height:33px;
        span {
font-size:24px;
font-family:PingFang-SC-Medium,PingFang-SC;
font-weight:500;
color:#FA9702;
line-height:33px;
        }
      }
    }
  }

  div.wallet_affirm {
      display: flex;
      justify-content: space-between;
    div.wallet_affirm_left {
      p {
          font-size:24px;
font-family:PingFang-SC-Medium,PingFang-SC;
font-weight:500;
color:rgba(102,102,102,1);
line-height:33px;
      }

      h1 {
font-size:32px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(250,151,2,1);
line-height:45px;
margin-left: 40px;
      }
    }

    div.wallet_affirm_right {
width:330px;
height:88px;
background:rgba(250,151,2,1);
border-radius:6px;
font-size:32px;
font-family:PingFang-SC-Bold,PingFang-SC;
font-weight:bold;
color:rgba(255,255,255,1);
line-height:88px;
text-align: center;
    }
  }
}
</style>