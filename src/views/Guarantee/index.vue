<template>
  <div class="agreement">
    <div class="agreement_title">
      <h1>押金</h1>
    </div>
    <div class="agreement_box">
      <div class="agreement_box_title">
        <p>一</p>
      </div>
      <div class="agreement_box_content">
        <p>为确保房屋及其附属设施的完好，及租赁期间内相关费用如期结清，用户需缴纳押金。（在租赁关系消除且用户迁空、点清并付清所有应付费用后的1-2个工作日退回原支付渠道内将押金全额无息返还。）</p>
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