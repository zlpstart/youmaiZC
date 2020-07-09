<template>
  <div class="box">
    <div class="aboutToSee" v-for="item in look" v-show="look.length > 0" :key="item.space_work_id">
      <div class="aboutToSee_top">
        <div class="aboutToSee_top_txt">
          <p>{{item.look_date}} {{item.look_time}}</p>
        </div>
        <div class="aboutToSee_top_btn">
          <p>联系我们</p>
        </div>
      </div>
      <div class="aboutToSee_content">
        <div class="aboutToSee_content_box">
          <div class="contentList">
            <div
              :class="{rentingList_content:true,rentingList_margin:true}"
            >
              <div class="rentingList_content_box">
                <div class="rentingList_content_box_img">
                  <img src="../../assets/ceshi.jpg" alt />
                </div>
                <div class="rentingList_content_box_txt">
                  <div
                    :class="{rentingList_content_box_txt_h1:true,form:$route.path == '/orderform'}"
                  >
                    <h1
                      :class="{txt_medium:true,form2:$route.path != '/orderform'}"
                    >{{item.work_sapce_name}}</h1>
                    <!-- {{getLiveDatas}} -->
                  </div>
                  <div
                    class="rentingList_content_box_txt_span"
                    v-show="$route.path != '/orderform' && $route.path != '/havePaid'"
                  >
                    <p class="txt_min">
                      <img src="../../assets/bangong_icon_chair_nor.png" alt />
                      {{item.station}}个工位
                    </p>
                    <p class="txt_min">
                      <img src="../../assets/bangong_icon_mianji_nor.png" alt />
                      {{item.facilities_services}}㎡面积
                    </p>
                  </div>
                  <div class="zhanwei" v-show="!($route.path != '/orderform') "></div>
                  <div class="rentingList_content_box_txt_card txt_card">
                    <p>茶水间</p>
                    <p>路演厅</p>
                  </div>
                  <div class="rentingList_content_box_txt_money">
                    <p
                      :class="{txt_money:true,txt_orderform:$route.path == '/orderform'}"
                    >¥{{item.price}}/月</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="miss" v-show="look.length == 0">
      <img src="../../assets/img_visit.png" alt="">
    </div>
  </div>
</template>

<script>
import LiveList from "../../components/RentingList/index";

export default {
  name: "aboutToSee",
  data() {
    return {
      look: []
    };
  },
  components: {
    LiveList
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let para = {
        id: window.sessionStorage.getItem("userId")
      };
      this.$api.aboutToSee.getAboutToSee(para).then(res => {
        console.log("我在模块里请求到了数据");
        console.log(res.data.data);
        this.look = res.data.data;
        // this.look = [];
        this.work = res.data.data.work;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.aboutToSee:nth-child(1) {
  .aboutToSee_top:nth-child(1) {
    margin-top: 0;
  }
}
div.aboutToSee {
  div.aboutToSee_top {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 100px;
    background: url("../../assets/img_yuekan .png") no-repeat center;
    background-size: 100%;
    div.aboutToSee_top_txt {
      width: 100%;
      height: 100px;
      line-height: 88px;
      p {
        font-size: 30px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }

    div.aboutToSee_top_btn {
      width: 118px;
      height: 42px;
      background: url("../../assets/img_contact.png") no-repeat center;
      background-size: 100%;
      text-align: center;
      margin-top: -18px;
      padding: 5px 11px;
      box-sizing: content-box;
      p {
        font-size: 20px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 42px;
      }
    }
  }

  div.aboutToSee_content {
    width: 100%;
    background: white;
    div.aboutToSee_content_box {
      padding: 0 30px;
    }
  }
}
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
.txt_orderform {
  font-size:28px;
  font-family:PingFang-SC-Bold,PingFang-SC;
  font-weight:bold;
  color:rgba(102,102,102,1);
  line-height:40px;
}
</style>