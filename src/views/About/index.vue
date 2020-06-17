<template>
  <div class="about">
    <div class="about_top">
      <img src="../../assets/ceshi.jpg" alt />
    </div>
    <div class="about_content">
      <div class="about_content_title">
        <h1>有麦众创</h1>
      </div>
      <div class="about_content_txt">
        <p>线上展示短视频功能型场地，提供在线咨询与预定服务，为入驻企业提供工单服务、短视频增值服务、投融资服务等。有麦众创包括有麦租房、有麦开发、有麦企服。</p>
      </div>
      <div class="about_content_txt">
        <p>1. 有麦租房：将传统B2C电商二级分销模式引入办公租赁招商系统中，打造一个真正意义上的全民招商系统。</p>
        <p>·房源租赁：提供租赁服务，在线办公租房及直播基地的展示与预约</p>
        <p>·房源微商：提供意向客户，精选推广，快速提升效果</p>
        <p>·房源信息：提供房源信息，房客源均包，实时更新</p>
      </div>
      <div class="about_content_txt">
        <p>2. 有麦开发：有麦官方团队打造，是专注于短视频与直播领域的软件开发平台，提供短视频行业的技术解决方案。</p>
        <p>·短视频系统：为客户提供高品质，可定制化的一站式解决方案。</p>
        <p>·其他短视频系统：提供短视频创意、产品广告拍摄等专业服务平台</p>
        <p>·互动直播系统：丰富的互动直播功能，枪视频技术支持，清晰流畅</p>
        <p>·直播电商系统：直播+商家入驻+电商购物模式，快速打造企业播购物平台。</p>
      </div>
      <div class="about_content_txt">
        <p>3. 有麦企服: 全智能化企业运营平台，提供客服、基础服务和增值服务支持</p>
        <p>专业化的服务团队7*24小时值班在线，服务台统一窗口集中受理咨询问答，进行调度派单，派发给企服部门或物业管理部。提供投融资服务、工商服务、人力资源、法律事务等基础服务，及IP题材创作、短视频拍摄、场地提供、设备支持等增值服务。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
div.about {
  padding-bottom: 67px;
  div.about_top {
    width: 750px;
    height: 421px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.about_content {
    padding: 0 30px;
    div.about_content_title {
      text-align: center;
      margin-top: 40px;
      h1 {
        font-size: 36px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 50px;
      }
    }

    div.about_content_txt {
      margin-top: 30px;
      p {
        font-size: 26px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 37px;
      }
    }
  }
}
</style>