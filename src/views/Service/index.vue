<template>
    <div class="service">
    <div class="box" v-if="!showAttention">
      <!-- <div class="box_content">
        <div class="box_img">
          <img src="../../assets/img_guanzhu.png" alt />
        </div>
        <div class="box_txt">
          <p>您还没有入驻</p>
          <p>搜索结果为空</p>
        </div>
      </div> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"service",
    data(){
      return {
        showAttention:false
      }
    }
}
</script>

<style lang="less" scoped>
div.box {
  div.box_content {
    width: 627px;
    height: 619px;
    margin: auto;
    margin-top: 400px;
    position: relative;
    div.box_img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div.box_txt {
      width: 250px;
      text-align: center;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 38px;
      }
    }
  }
}
</style>