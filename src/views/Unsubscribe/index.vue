<template>
  <div class="agreement">
    <div class="agreement_title">
      <h1>退订政策</h1>
    </div>
    <div class="xian"></div>
    <div class="agreement_box">
      <div class="agreement_box_title">

      </div>
      <div class="agreement_box_content">
        <p>若取消时距使用时间6小时以上，可免费取消预订，退还租客全部租赁费用。</p>
        <p>若取消时距使用时间不满6小时，预订场地费不予退还，平台收取全部租赁费。</p>
        <p>使用场地后提前退租，平台收取约定时间全部费用，不予退费。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div.agreement {
  padding: 50px 30px;
  div.agreement_title {
    h1 {
        font-size:36px;
        font-family:PingFang-SC-Bold,PingFang-SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:50px;
    }
  }

  div.agreement_box {
    margin-top: 30px;
    div.agreement_box_title {
      p {
        color: #333333;
        font-size: 26px;
        font-weight: Bold;
      }
    }

    div.agreement_box_content {
      p {
        margin-top: 30px;
        font-size:26px;
        font-family:PingFang-SC-Medium,PingFang-SC;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:37px;
      }
    }
  }
}
.agreement_box_content_content p {
  color: #666666;
  font-size: 26px;
  line-height: 35px;
  margin-top: 35px;
}
.agreement_box_privacy_minbox p {
  color: #666666;
  font-size: 26px;
  line-height: 35px;
  margin-top: 35px;
}
.xian {
    width:38px;
    height:3px;
    background:rgba(174,174,174,1);
    margin-top: 40px;
}
</style>