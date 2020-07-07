<template>
  <div class="contentList">
    <div
      v-for="item in liveData"
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
            >{{item.work_sapce_name}}</h1>
          </div>
          <div class="rentingList_content_box_txt_span" v-show="$route.path != '/orderform'">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              {{item.station}}个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              {{item.office_area}}㎡面积
            </p>
          </div>
          <div class="zhanwei" v-show="!($route.path != '/orderform')"></div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥{{item.price}}/月</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentList",
  data() {
    return {
      liveData: []
    };
  },
  methods: {
    toWorkDetails(e) {
      if (this.$route.path == "/rentingList") {
        this.$router.push(`/RentingDetails/${e.id}`);
      } else if (this.$route.path == "/liveList") {
        this.$router.push("/liveDetails");
      }
    }
  },
  mounted() {
    if (this.$route.path == "/aboutToSee") {
    } else {
      this.$api.rentingList.getRentingList().then(res => {
        console.log("我在组件里拿到了数据")
        console.log(res);
        this.liveData = res.data.msg.data;
      });
    }
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
</style>