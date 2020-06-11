<template>
  <div class="contentList">
    <div :class="{rentingList_content:true,rentingList_margin:this.$route.path == '/orderform'}" @click="toWorkDetails">
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div :class="{rentingList_content_box_txt_h1:true,form:this.$route.path == '/orderform'}">
            <h1
              :class="{txt_medium:true,form2:this.$route.path != '/orderform'}"
            >软件谷科创城C1栋5楼504软件谷科创城C1栋5楼504</h1>
          </div>
          <div class="rentingList_content_box_txt_span" v-show="this.$route.path != '/orderform'">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              100个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              500.00㎡面积
            </p>
          </div>
          <div class="zhanwei" v-show="!(this.$route.path != '/orderform')"></div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥4800/月</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentList",
  methods: {
    toWorkDetails() {
      console.log(this.$route.path);
      if (this.$route.path == "/rentingList") {
        this.$router.push("/RentingDetails");
      } else if (this.$route.path == "/liveList") {
        this.$router.push("/liveDetails");
      }
    }
  }
};
</script>

<style lang="less" scoped>
div.rentingList_content {
  margin-top: 20px;
  margin-bottom: 61px;
  .rentingList_content_box:nth-child(1) {
    margin-top: 0;
  }
  div.rentingList_content_box {
    margin-top: 30px;
    display: flex;
    div.rentingList_content_box_img {
      width: 262px;
      height: 197px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    div.rentingList_content_box_txt {
      width: 409px;
      margin-left: 20px;
      div.rentingList_content_box_txt_h1 {
      }

      div.rentingList_content_box_txt_span {
        display: flex;
        margin-top: 15px;
        p:nth-child(1) {
          margin-left: 0;
        }
        p {
          margin-left: 27px;
          img {
            width: 23px;
            height: 23px;
          }
        }
      }
      div.rentingList_content_box_txt_card {
        margin-top: 24px;
      }
      div.rentingList_content_box_txt_money {
        margin-top: 11px;
      }
    }
  }
}
.form {
  height: 74px;
}
.form2 {
  white-space: nowrap;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.zhanwei {
  width: 100%;
  height: 6px;
}
.rentingList_margin {
  margin-top: 20px;
  margin-bottom: 30px !important;
}
</style>