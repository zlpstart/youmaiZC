<template>
  <div class="couponUnused">
    <div class="couponUnused_box">
      <div class="couponUnused_box_left">
        <h1>
          <span>¥</span>100.00
        </h1>
        <p>满1000元可用</p>
      </div>
      <div class="couponUnused_box_right">
        <h1>服装电商直播基地专用抵扣券</h1>
        <p>2020-06-01至2020-06-25</p>
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
        <p>2020-06-01至2020-06-25</p>
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
        <p>2020-06-01至2020-06-25</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "couponUnused",
  data() {
    return {};
  },
  props: []
};
</script>

<style lang="less" scoped>
.padd {
  padding: 0 30px;
}

div.couponUnused {
  div.couponUnused_box {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    height: 200px;
    background: url("../../assets/img_quan_press (1).png") no-repeat center;
    background-size: 100%;
    display: flex;
    opacity: 0.5;
    div.couponUnused_box_left {
      width: 240px;
      text-align: center;

      h1 {
        font-size: 52px;
        font-weight: bold;
color:rgba(250,151,2,1);
        line-height: 33px;
        margin-top: 62px;
        span {
          font-size: 24px;
        }
      }

      p {
        font-size: 22px;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
        margin-top: 10px;
      }
    }

    div.couponUnused_box_right {
      flex: 3;
      text-align: center;
      h1 {
        font-size: 28px;
        margin-top: 59px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
      }

      p {
        font-size: 20px;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 28px;
        margin-top: 24px;
      }
    }
  }
}
</style>