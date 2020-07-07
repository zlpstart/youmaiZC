<template>
  <div class="contentList">
    <div
      v-for="item in getLiveLists"
      :key="item.id"
      :class="{rentingList_content:true,rentingList_margin:$route.path == '/orderform'}"
      @click="toWorkDetails(item)"
    >
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div :class="{rentingList_content_box_txt_h1:true,form:$route.path == '/orderform'}">
            <h1
              :class="{txt_medium:true,form2:$route.path != '/orderform'}"
            >{{item.sapce_live_name}}</h1>
          </div>
          <div class="rentingList_content_box_txt_span" v-show="$route.path != '/orderform'">
            <div class="txt_min">
              <div class="rentingList_content_box_txt_span_img">
                <img src="../../assets/zhibo_icon_adress_nor.png" alt />
              </div>
              <div class="rentingList_content_box_txt_span_img_txt">软件谷科创城C2栋18楼1815</div>
            </div>
          </div>
          <div class="zhanwei" v-show="!($route.path != '/orderform')"></div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥{{item.rent}}/月</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentList",
  data(){
    return {
      liveLists:[]
    }
  },
  methods: {
    toWorkDetails(e) {
      console.log(e.id)
      if (this.$route.path == "/rentingList") {
        this.$router.push("/RentingDetails");
      } else if (this.$route.path == "/liveList") {
        this.$router.push({
          path:`/liveDetails/${e.id}`
        });
      }
    }
  },
  props:{
    getLiveLists:Array
  }
};
</script>

<style lang="less" scoped>
div.rentingList_content {
  margin-top: 20px;
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
            height: 24px;
          }
        }
      }
      div.rentingList_content_box_txt_card {
        margin-top: 28px;
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
.txt_min {
  display: flex;
}
.rentingList_content_box_txt_span_img img {
  height: 24px;
  margin-top: 1px;
}
.rentingList_content_box_txt_span_img_txt {
  margin-left: 8px;
}
</style>