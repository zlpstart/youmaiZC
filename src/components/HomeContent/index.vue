<template>
  <div>
    <!-- 推荐好房 -->
    <div class="HomeContent">
      <div class="HomeContent_title paddd" @click="toList">
        <div class="HomeContent_title_left">
          <h1 class="txt_title">办公租房</h1>
          <p>拎包入驻，灵活办公</p>
        </div>
        <div class="HomeContent_title_right">
          <p>
            <img src="../../assets/icon_link_nor.png" alt />
          </p>
        </div>
      </div>
      <div class="max_box">
        <div class="HomeContent_wrap">
          <div class="HomeContent_wrap_box">
            <div class="rentingList_content_box">
              <div class="rentingList_content_box_img">
                <img src="../../assets/ceshi.jpg" alt />
              </div>
              <div class="rentingList_content_box_txt">
                <div
                  :class="{rentingList_content_box_txt_h1:true,form:this.$route.path == '/orderform'}"
                >
                  <h1
                    :class="{txt_medium:true,form2:this.$route.path != '/orderform'}"
                  >软件谷科创城C1栋5楼504</h1>
                </div>
                <div
                  class="rentingList_content_box_txt_span"
                  v-show="this.$route.path != '/orderform'"
                >
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_chair_nor.png" alt />
                    100个工位
                  </p>
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_mianji_nor.png" alt />
                    500.00㎡
                  </p>
                </div>
                <div class="zhanwei" v-show="!(this.$route.path != '/orderform')"></div>
                <div class="rentingList_content_box_txt_money">
                  <p class="txt_money">¥4800/月</p>
                </div>
                <div class="rentingList_content_box_txt_card txt_card">
                  <p>茶水间</p>
                  <p>路演厅</p>
                </div>
              </div>
            </div>
          </div>
          <div class="HomeContent_wrap_box">
            <div class="rentingList_content_box">
              <div class="rentingList_content_box_img">
                <img src="../../assets/ceshi.jpg" alt />
              </div>
              <div class="rentingList_content_box_txt">
                <div
                  :class="{rentingList_content_box_txt_h1:true,form:this.$route.path == '/orderform'}"
                >
                  <h1
                    :class="{txt_medium:true,form2:this.$route.path != '/orderform'}"
                  >软件谷科创城C1栋5楼504</h1>
                </div>
                <div
                  class="rentingList_content_box_txt_span"
                  v-show="this.$route.path != '/orderform'"
                >
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_chair_nor.png" alt />
                    100个工位
                  </p>
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_mianji_nor.png" alt />
                    500.00㎡
                  </p>
                </div>
                <div class="zhanwei" v-show="!(this.$route.path != '/orderform')"></div>
                <div class="rentingList_content_box_txt_money">
                  <p class="txt_money">¥4800/月</p>
                </div>
                <div class="rentingList_content_box_txt_card txt_card">
                  <p>茶水间</p>
                  <p>路演厅</p>
                </div>
              </div>
            </div>
          </div>
          <div class="HomeContent_wrap_box">
            <div class="rentingList_content_box">
              <div class="rentingList_content_box_img">
                <img src="../../assets/ceshi.jpg" alt />
              </div>
              <div class="rentingList_content_box_txt">
                <div
                  :class="{rentingList_content_box_txt_h1:true,form:this.$route.path == '/orderform'}"
                >
                  <h1
                    :class="{txt_medium:true,form2:this.$route.path != '/orderform'}"
                  >软件谷科创城C1栋5楼504</h1>
                </div>
                <div
                  class="rentingList_content_box_txt_span"
                  v-show="this.$route.path != '/orderform'"
                >
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_chair_nor.png" alt />
                    100个工位
                  </p>
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_mianji_nor.png" alt />
                    500.00㎡
                  </p>
                </div>
                <div class="zhanwei" v-show="!(this.$route.path != '/orderform')"></div>
                <div class="rentingList_content_box_txt_money">
                  <p class="txt_money">¥4800/月</p>
                </div>
                <div class="rentingList_content_box_txt_card txt_card">
                  <p>茶水间</p>
                  <p>路演厅</p>
                </div>
              </div>
            </div>
          </div>
          <div class="HomeContent_wrap_box">
            <div class="rentingList_content_box">
              <div class="rentingList_content_box_img">
                <img src="../../assets/ceshi.jpg" alt />
              </div>
              <div class="rentingList_content_box_txt">
                <div
                  :class="{rentingList_content_box_txt_h1:true,form:this.$route.path == '/orderform'}"
                >
                  <h1
                    :class="{txt_medium:true,form2:this.$route.path != '/orderform'}"
                  >软件谷科创城C1栋5楼504</h1>
                </div>
                <div
                  class="rentingList_content_box_txt_span"
                  v-show="this.$route.path != '/orderform'"
                >
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_chair_nor.png" alt />
                    100个工位
                  </p>
                  <p class="txt_min">
                    <img src="../../assets/bangong_icon_mianji_nor.png" alt />
                    500.00㎡
                  </p>
                </div>
                <div class="zhanwei" v-show="!(this.$route.path != '/orderform')"></div>
                <div class="rentingList_content_box_txt_money">
                  <p class="txt_money">¥4800/月</p>
                </div>
                <div class="rentingList_content_box_txt_card txt_card">
                  <p>茶水间</p>
                  <p>路演厅</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 直播基地 -->
    <div class="HomeContent live_live">
      <div class="HomeContent_title paddd" @click="toLiveList">
        <div class="HomeContent_title_left">
          <h1 class="txt_title">直播基地</h1>
          <p>个性软装，多元场景</p>
        </div>
        <div class="HomeContent_title_right">
          <p>
            <img src="../../assets/icon_link_nor.png" alt />
          </p>
        </div>
      </div>
      <div>
        <div class="max_box">
          <div class="live">
            <div class="live_maxbox">
              <div class="live_box">
                <div class="live_box_img">
                  <div class="live_box_img_left">
                    <img src="../../assets/ceshi.jpg" alt />
                    <div class="live_box_img_left_box">
                      <p>直播室</p>
                    </div>
                  </div>
                  <div class="live_box_img_right">
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>更衣室</p>
                      </div>
                    </div>
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>贮藏室</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="live_box_txt">
                  <div class="live_box_txt_left">
                    <h1 class="txt_medium">软件谷科创城C1栋18楼1810-1815</h1>
                    <p class="txt_min">网红直播聚集地，专业直播平台</p>
                  </div>
                  <div class="live_box_txt_right">
                    <p>¥1000/时</p>
                  </div>
                </div>
                <div class="live_box_crad">
                  <div class="live_box_crad_box">
                    <p>茶水间</p>
                  </div>
                  <div class="live_box_crad_box">
                    <p>路演厅</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="live_maxbox">
              <div class="live_box">
                <div class="live_box_img">
                  <div class="live_box_img_left">
                    <img src="../../assets/ceshi.jpg" alt />
                    <div class="live_box_img_left_box">
                      <p>直播室</p>
                    </div>
                  </div>
                  <div class="live_box_img_right">
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>更衣室</p>
                      </div>
                    </div>
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>贮藏室</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="live_box_txt">
                  <div class="live_box_txt_left">
                    <h1 class="txt_medium">软件谷科创城C1栋18楼1810-1815</h1>
                    <p class="txt_min">网红直播聚集地，专业直播平台</p>
                  </div>
                  <div class="live_box_txt_right">
                    <p>¥1000/时</p>
                  </div>
                </div>
                <div class="live_box_crad">
                  <div class="live_box_crad_box">
                    <p>茶水间</p>
                  </div>
                  <div class="live_box_crad_box">
                    <p>路演厅</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="live_maxbox">
              <div class="live_box">
                <div class="live_box_img">
                  <div class="live_box_img_left">
                    <img src="../../assets/ceshi.jpg" alt />
                    <div class="live_box_img_left_box">
                      <p>直播室</p>
                    </div>
                  </div>
                  <div class="live_box_img_right">
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>更衣室</p>
                      </div>
                    </div>
                    <div class="live_box_img_right_box">
                      <img src="../../assets/ceshi.jpg" alt />
                      <div class="live_box_img_left_box">
                        <p>贮藏室</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="live_box_txt">
                  <div class="live_box_txt_left">
                    <h1 class="txt_medium">软件谷科创城C1栋18楼1810-1815</h1>
                    <p class="txt_min">网红直播聚集地，专业直播平台</p>
                  </div>
                  <div class="live_box_txt_right">
                    <p>¥1000/时</p>
                  </div>
                </div>
                <div class="live_box_crad">
                  <div class="live_box_crad_box">
                    <p>茶水间</p>
                  </div>
                  <div class="live_box_crad_box">
                    <p>路演厅</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  data() {
    return {};
  },
  methods: {
    toList() {
      this.$router.push("/rentingList");
    },
    toLiveList() {
      this.$router.push("/liveList");
    }
  }
};
</script>

<style lang="less" scoped>
.HomeContent {
  width: 100%;
  margin-top: 40px;
  &_title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &_left {
      p {
        font-size: 22px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #999999;
        line-height: 30px;
      }
    }
    &_right {
      line-height: 39px;
      img {
        width: 14px;
        height: 26px;
        margin-top: 35px;
      }
    }
  }
  &_wrap {
    margin-top: 20px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    &_box:nth-child(1) {
      margin-left: 0;
    }
    &_box {
      margin-left: 10px;
      &_img {
        width: 325px;
        height: 244px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &_txt {
        margin-top: 20px;
        p:nth-child(2) {
          margin-top: 11px;
        }
        .price {
          margin-top: 20px;
          font-size: 26px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(250, 151, 2, 1);
          line-height: 37px;
        }
      }
      &_card {
        display: flex;
        margin-top: 6px;
        &_box {
          margin-left: 10px;
          padding: 5px 16px;
          background: #f4f4f4;
          font-size: 22px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
        }
        &_box:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
}
.live {
  margin-top: 30px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  &_box:nth-child(1) {
    margin-left: 0;
  }
  &_box {
    width: 660px;
    height: 550px;
    border-radius: 6px;
    border: 1px solid rgba(222, 222, 222, 1);
    padding: 20px;
    margin-left: 10px;
    &_img {
      display: flex;
      justify-content: space-between;
      &_left {
        width: 415px;
        height: 310px;
        margin-right: 10px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .live_box_img_left_box {
          position: absolute;
          padding: 2px 13px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 2px;
          top: 15px;
          left: 15px;
          p {
            font-size: 22px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 30px;
          }
        }
      }
      &_right {
        width: 195px;
        height: 310px;
        img {
          width: 14px;
          height: 26px;
        }
        &_box {
          width: 100%;
          height: 150px;
          background: black;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .live_box_img_left_box {
            position: absolute;
            padding: 2px 13px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 2px;
            top: 15px;
            left: 15px;
            p {
              font-size: 22px;
              font-family: PingFang-SC-Medium, PingFang-SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 30px;
            }
          }
        }
        &_box:nth-child(2) {
          margin-top: 10px;
        }
      }
    }
    &_txt {
      display: flex;
      justify-content: space-between;
      &_left {
        h1 {
          margin-top: 20px;
        }
        p {
          margin-top: 10px;
        }
      }
      &_right {
        p {
          font-size: 26px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(250, 151, 2, 1);
          line-height: 37px;
          margin-top: 20px;
        }
      }
    }
    &_crad {
      margin-top: 54px;
      display: flex;
      &_box:nth-child(1) {
        margin-left: 0;
      }
      &_box {
        padding: 5px 16px;
        background: #f4f4f4;
        margin-left: 10px;
        p {
          font-size: 22px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
        }
      }
    }
  }
}
.HomeContent_wrap_live {
  height: 200px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.live_live {
  margin-bottom: 40px;
}
.txt_p {
  height: 30px;
  img:nth-child(1) {
    width: 30px;
  }
  img:nth-child(3) {
    width: 23px;
    margin-left: 27px;
    margin-right: 6px;
  }
  span {
    line-height: 0px;
    height: 16px;
    display: inline-block;
    margin-top: -10px;
  }
}
.max_box {
  width: 100%;
  overflow: hidden;
  padding-left: 30px;
}
.HomeContent_wrap .HomeContent_wrap_box:nth-last-child(1) {
  padding-right: 30px !important;
}
.live_maxbox {
  margin-right: 10px;
}
.live_maxbox:nth-last-child(1) {
  margin-right: 0;
}
.live .live_maxbox:nth-last-child(1) {
  padding-right: 30px !important;
}
div.rentingList_content_box {
  div.rentingList_content_box_img {
    width: 325px;
    height: 244px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.rentingList_content_box_txt {
    margin-top: 20px;
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
        // img {
        //   width: 23px;
        //   height: 23px;
        // }
      }
    }
    div.rentingList_content_box_txt_card {
      margin-top: 6px;
    }
    div.rentingList_content_box_txt_money {
      margin-top: 11px;
    }
  }
}
.txt_min img {
            height: 23px;
}
</style>