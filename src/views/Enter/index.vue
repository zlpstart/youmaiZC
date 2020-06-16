<template>
  <div class="agreement">
    <div class="agreement_title">
      <h1>最少起订</h1>
    </div>
    <div class="xian"></div>
    <div class="agreement_box">
      <div class="agreement_box_title">

      </div>
      <div class="agreement_box_content">
        <p>一、保持办公环境清馨，严禁在办区域内吸烟。根据大楼消防要求，烟感和报警系统连动，烟量过大会产生报警，吸烟须到指定的消防通道处；</p>
        <p>二、保持良好工作风貌，根据大楼物业管理公司制度规定，严禁在办公场所就餐、吃零食或存放零食，以防止滋生蟑螂等害虫，危及办公楼内部环境卫生；</p>
        <p>三、保持办公区域简洁卫生，严禁乱堆乱放、乱扔垃圾和随地吐痰；</p>
        <p>四、保持洗手间、开水间洁净干爽，严禁乱泼乱倒；</p>
        <p>五、保持办公场所布局整齐，严禁私自搬动调换；</p>
        <p>六、注意文明办公，鉴于公司现行开放式办公环境特点，更加要求每位员工，严禁办公场所大声喧哗，员工之间工作交流或接听电话时需尽量放低声音，以免影响或干扰其他人员办公；</p>
        <p>七、注意爱护办公设备，严禁野蛮使用或乱写乱画；</p>
        <p>八、注意办公场所安全，严禁随意增拉电线，乱接网线、电话线及电器设备等。</p>
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