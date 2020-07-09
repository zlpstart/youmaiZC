<template>
  <div>
    <div class="detailList" v-for="item in detail" :key="item.id">
      <div class="detailList_left">
        <div class="detailList_left_txt">
          <!-- {{detail}} -->
          <h1>{{item.order_name}}</h1>
        </div>
        <div class="detailList_left_card">
          <p>微信支付</p>
        </div>
      </div>
      <div class="detailList_right">
        <div class="detailList_right_tx">
          <p>2020-06-20</p>
        </div>
        <div class="detailList_right_mach">
          <p v-show="item.account_type == 'pay'">+¥5000.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailList",
  data() {
    return {};
  },
  mounted() {
    console.log(this.detail);
  },
  props: ["detail"]
};
</script>

<style lang="less" scoped>
div.detailList {
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  padding: 19px 0;
  border-bottom: 1px solid #dedede;
  div.detailList_left {
    div.detailList_left_txt {
      h1 {
        font-size: 30px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 42px;
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    div.detailList_left_card {
      margin-top: 18px;
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 33px;
        padding: 5px 7px;
        border: 1px solid rgba(222, 222, 222, 1);
        float: left;
      }
    }
  }

  div.detailList_right {
    div.detailList_right_tx {
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 33px;
        text-align: right;
      }
    }

    div.detailList_right_mach {
      margin-top: 17px;
      p {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(250, 151, 2, 1);
        line-height: 45px;
      }
    }
  }
}
</style>