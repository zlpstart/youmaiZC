<template>
  <div class="appointment">
    <div class="appointment_banner">
      <img src="../../assets/ceshi.jpg" alt />
    </div>
    <div class="appointment_form">
      <div class="appointment_form_title">
        <p>厨房单间直播间，软件谷科创城D区1栋5楼带电梯，配套齐全</p>
      </div>
      <div class="appointment_form_form">
        <div class="appointment_form_form_input">
          <div class="yuan"></div>
          <label for="phone">联系方式</label>
          <input autocomplete="off" id="phone" v-model="form.phone" type="text" placeholder="请输入手机号码" />
        </div>
        <div class="appointment_form_form_input">
          <div class="yuan"></div>
          <label for="phone">您的姓名</label>
          <input autocomplete="off" id="phone" v-model="form.name" type="text" placeholder="请输入姓名" />
        </div>
        <!-- 租房预约 -->
        <div class="appointment_form_form_input" v-if="!type" @click="showType">
          <div class="yuan"></div>
          <label for="phone">看房时间</label>
          <input
            id="phone"
            v-model="form.time"
            type="text"
            autocomplete="off"
            placeholder="请选择看房时间"
            @click="showHouse"
          />
          <p>
            <img src="../../assets/icon_link_nor.png" alt />
          </p>
        </div>
        <!-- 直播预约 -->
        <div class="appointment_form_form_input" v-if="type" @click="showType2">
          <div class="yuan"></div>
          <label for="phone">选择时间</label>
          <input id="phone" type="text" placeholder="请选择用房时间" @click="showLive" />
          <p><img src="../../assets/icon_link_nor.png" alt=""></p>
        </div>
      </div>
      <div class="appointment_form_form_button" v-show="type" @click="toOrderForm">下一步</div>
      <div class="appointment_form_form_button" v-show="!type" @click="subscribe">立即预约</div>
    </div>
    <!-- 租房预约 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <div class="popup_title">请选择看房时间</div>
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-item="clickItem"
      />
      <div class="popup_bottom">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </div>
    </van-popup>
    <!-- 直播预约 -->
    <div class="lives">
      <van-popup v-model="showLives" position="bottom" :style="{ height: '30%' }">
        <div class="popup_title">请选择用房时间</div>
        <div class="popup_timer">
          <div class="popup_timer_left">
            <p>周三</p>
            <p>15:00</p>
          </div>
          <div class="popup_timer_right">
            <p>共5小时</p>
          </div>
          <div class="popup_timer_left">
            <p>周三</p>
            <p>20:00</p>
          </div>
        </div>
        <van-tabs line-width="44" line-height="5" title="ee">
          <van-tab v-for="item in timer" :key="item.date2" :title="item.date  + item.date2">
            <div class="van_content">
              <ul>
                <li
                  v-for="(item,index) in timers"
                  :key="index"
                  :class="{'van_active':item.active}"
                  @click="times(item,index)"
                >
                  <p>{{item.time}}</p>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
        <div class="popup_bottom">
          <button @click="cancel">取消</button>
          <button @click="confirm">确定</button>
        </div>
      </van-popup>
    </div>
    <van-popup :close-on-click-overlay="false" v-model="show2">
      <h1>预约成功</h1>
      <p>从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。</p>
      <button @click="close">知道了</button>
      <div class="img">
        <img src="../../assets/img_yuyue_success.png" alt />
      </div>
    </van-popup>
    <div class="appointment_alert" v-show="showAlert">
      <div class="appointment_alert_img">
        <img src="../../assets/tip_icon_jinggao.png" alt />
      </div>
      <div class="appointment_alert_txt">
        <p>请输入正确的手机号码</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appointment",
  data() {
    return {
      type: true,
      show: false,
      show2: false,
      showLives: false,
      timerObj:{},
      form: {
        phone: "",
        name: "",
        time: ""
      },
      showAlert: false,
      items: [
        //   1
        {
          // 导航名称
          text: "06月01日（今天）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 2
        {
          // 导航名称
          text: "06月02日（明天）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 3
        {
          // 导航名称
          text: "06月03日（周三）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 4
        {
          // 导航名称
          text: "06月04日（周四）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 5
        {
          // 导航名称
          text: "06月05日（周五）",
          children: [
            {
              // 名称
              text: "呵呵",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 6
        {
          // 导航名称
          text: "06月06日（周六）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        },
        // 7
        {
          // 导航名称
          text: "06月07日（周日）",
          children: [
            {
              // 名称
              text: "09：00-09：30",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "09：30-10：00",
              id: 2
            },
            {
              text: "10：00-10：30",
              id: 3
            },
            {
              text: "11：00-11：30",
              id: 4
            },
            {
              text: "11：30-12：00 (已约满)",
              id: 5
            },
            {
              text: "12：00-12：30",
              id: 6
            },
            {
              text: "12：30-13：00",
              id: 7
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0,
      timer: [
        {
          date: "今天",
          date2: "06/01"
        },
        {
          date: "明天",
          date2: "06/02"
        },
        {
          date: "周一",
          date2: "06/03"
        },
        {
          date: "周二",
          date2: "06/04"
        },
        {
          date: "周三",
          date2: "06/05"
        },
        {
          date: "周四",
          date2: "06/06"
        },
        {
          date: "周五",
          date2: "06/07"
        }
      ],
      timers: [
        {
          id: 1,
          time: "10:00",
          active: false
        },
        {
          id: 2,
          time: "11:00",
          active: false
        },
        {
          id: 3,
          time: "12:00",
          active: false
        },
        {
          id: 4,
          time: "1:00",
          active: false
        },
        {
          id: 5,
          time: "2:00",
          active: false
        },
        {
          id: 6,
          time: "3:00",
          active: false
        },
        {
          id: 7,
          time: "4:00",
          active: false
        },
        {
          id: 8,
          time: "5:00",
          active: false
        },
        {
          id: 9,
          time: "6:00",
          active: false
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.params.type);
    if (this.$route.params.type == 1) {
      this.type = false;
    }
    console.log(this.type);
  },
  methods: {
    showType() {
      this.show = true;
    },
    showType2() {
      this.showLives = true;
    },
    cancel() {
      this.show = false;
      this.showLives = false;
    },
    confirm() {
      this.form.time = this.timerObj
      console.log(this.timerObj)
      this.show = false;
      // this.show2 = true;
    },
    showHouse() {
      this.show = true;
    },
    close() {
      this.show2 = false;
      this.showLives = false;
      this.show = false;
    },
    showLive() {
      console.log(111);
      //   this.showLives = true;
    },
    times(item, index) {
      if (item.active) {
        item.active = false;
      } else {
        item.active = true;
      }
    },
    clickItem(e){
      this.timerObj = e.text;
      console.log(this.timerObj)
    },
    toOrderForm() {
      let a = this.phone(this.form.phone);
      if (!a) {
        this.showAlert = true;
        let setI = 0;
        let timer = setInterval(() => {
          setI++;
          if (setI >= 2) {
            this.showAlert = false;
            clearInterval(timer);
          }
        }, 1000);
      } else {
        this.$router.push("/orderform");
      }
    },
    phone(e) {
      const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(e)) {
        return false;
      } else {
        return true;
      }
    },
    email(e) {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(e)) {
        return true;
      } else {
        return false;
      }
    },
    subscribe(){
      let a = this.phone(this.form.phone);
      if (!a) {
        this.showAlert = true;
        let setI = 0;
        let timer = setInterval(() => {
          setI++;
          if (setI >= 2) {
            this.showAlert = false;
            clearInterval(timer);
          }
        }, 1000);
      } else {
        this.show2 = true
      }
    }
  }
};
</script>

<style lang="less" scoped>
div.appointment {
  div.appointment_banner {
    height: 562px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  div.appointment_form {
    width: 690px;
    padding: 45px 30px 58px 30px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 4px 11px 0px rgba(0, 0, 0, 0.09);
    border-radius: 16px;
    position: absolute;
    top: 433px;
    left: 50%;
    transform: translate(-50%, 0);
    div.appointment_form_title {
      p {
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 45px;
      }
    }
    div.appointment_form_form {
      margin-top: 39px;
      .appointment_form_form_input p img {
        width: 16px;
        height: 28px;
      }
      .appointment_form_form_input:nth-child(1) .yuan {
        border: 3px solid #43d39c;
      }
      .appointment_form_form_input:nth-child(2) .yuan {
        border: 3px solid #43b0d3;
      }
      .appointment_form_form_input:nth-child(3) .yuan {
        border: 3px solid #fa9702;
      }
      .appointment_form_form_input {
        height: 87px;
        line-height: 87px;
        display: flex;
        align-items: center;
        .yuan {
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 12px;
        }
        label {
          margin-left: 18px;
          font-size: 28px;
          font-family: PingFang-SC-Bold, PingFang-SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 40px;
        }
        input {
          margin-left: 50px;
          border: none;
          width: 400px;
          height: 40px;
          margin-top: 0;
          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          line-height: 40px;
        }
        input::-webkit-input-placeholder {
          font-size: 28px;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: rgba(199, 199, 199, 1);
          line-height: 40px;
        }
      }
    }
  }
  .appointment_form_form_button {
    width: 630px;
    height: 88px;
    background: rgba(250, 151, 2, 1);
    border-radius: 6px;
    text-align: center;
    font-size: 32px;
    margin-top: 193px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
  }
  .popup_title {
    width: 100%;
    height: 128px;
    line-height: 128px;
    text-align: center;
    font-size: 34px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .popup_bottom {
    width: 100%;
    height: 130px;
    padding: 21px 30px;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
    margin-top: 46px;
    button {
      width: 330px;
      height: 88px;
      border-radius: 6px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 450;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }
    button:nth-child(1) {
      background: rgba(199, 199, 199, 1);
    }
    button:nth-child(2) {
      background: rgba(250, 151, 2, 1);
    }
  }
}
.appointment_alert {
  width: 300px;
  height: 202px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .appointment_alert_img {
    width: 70px;
    height: 70px;
    margin: auto;
    margin-top: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .appointment_alert_txt {
    p {
      margin-top: 21px;
      font-size: 26px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 37px;
      text-align: center;
    }
  }
}
</style>