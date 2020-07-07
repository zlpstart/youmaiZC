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
          <input
            autocomplete="off"
            id="phone"
            v-model="form.phone"
            type="text"
            placeholder="请输入手机号码"
          />
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
            readonly
          />
          <p>
            <img src="../../assets/icon_link_nor.png" alt />
          </p>
        </div>
        <!-- 直播预约 -->
        <div class="appointment_form_form_input2" v-if="type" @click="showType2">
          <div class="yuan"></div>
          <label for="phone">选择时间</label>
          <input
            id="phone"
            type="text"
            v-model="timerInput"
            autocomplete="off"
            placeholder="请选择用房时间"
            @click="showLive"
            readonly
          />
          <p>
            <img src="../../assets/icon_link_nor.png" alt />
          </p>
        </div>
      </div>
      <div
        class="appointment_form_form_button"
        v-show="(type && (form.name != '' && form.phone != '' && form.time != ''))"
        @click="toOrderForm"
      >下一步</div>
      <div
        class="appointment_form_form_button2"
        v-show="(type && (form.name == '' || form.phone == '' || form.time == ''))"
      >下一步</div>
      <div
        v-show="(!type && form.name != '' && form.phone != '' && form.time != '')"
        class="appointment_form_form_button"
        @click="subscribe"
      >立即预约</div>
      <div
        v-show="(!type && (form.name == '' || form.phone == '' || form.time == ''))"
        class="appointment_form_form_button2"
      >立即预约</div>
    </div>
    <!-- 租房预约 -->
    <van-popup class="retingsss" v-model="show" position="bottom" :style="{ height: '30%' }">
      <div class="popup_title">
        请选择看房时间
        <img
          src="../../assets/zhibo_icon_close_nor.png"
          class="topPoup"
          @click="closeHoure"
          alt
        />
      </div>
      <van-tree-select
        class="timeDeta"
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-item="clickItem"
        @click-nav="clickNav"
        :class="{dis:true}"
      />
      <div class="popup_bottom">
        <button @click="cancel">取消</button>
        <button @click="confirm">确定</button>
      </div>
    </van-popup>
    <!-- 直播预约 -->
    <div class="lives">
      <van-popup class="livesss" v-model="showLives" position="bottom" :style="{ height: '30%' }">
        <div class="popup_title">
          请选择用房时间
          <img src="../../assets/zhibo_icon_close_nor.png" @click="closeHoure" alt />
        </div>
        <div class="popup_timer">
          <div class="popup_timer_left popup_timer_none" v-show="startTime.time == ''">
            <p>开始时间</p>
          </div>
          <div class="popup_timer_left" v-show="startTime.time != ''">
            <p>{{startTime.week}}</p>
            <p>{{startTime.time}}</p>
          </div>
          <div class="xianxian"></div>
          <div class="popup_timer_right" v-show="duration != 0">
            <p>共{{duration}}小时</p>
          </div>
          <div class="popup_timer_left popup_timer_none" v-show="overTime.time == ''">
            <p>结束时间</p>
          </div>
          <div class="popup_timer_left" v-show="overTime.time != ''">
            <p>{{overTime.week}}</p>
            <p>{{overTime.time}}</p>
          </div>
        </div>
        <!-- 开始时间 -->
        <van-tabs
          background="#F4F4F4"
          line-width="44"
          line-height="2"
          title="ee"
          :active="activeNum"
          bind:change="onChange1"
          @click="vanClick"
          v-show="this.startTime.time == ''"
          class="startTime timeDeta"
        >
          <van-tab
            v-for="item in timer"
            :key="item.date2"
            :title="item.date  + item.date2"
            @click="vanClick"
          >
            <div class="van_content">
              <ul>
                <li
                  v-for="(item,index) in timers"
                  :key="index"
                  :class="{'van_active':item.active}"
                  @click="times(item,index)"
                >
                  <p :class="{'isBtn':item.isBtn}">{{item.time}}</p>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>

        <!-- 结束时间 -->
        <van-tabs
          background="#F4F4F4"
          line-width="44"
          line-height="2"
          title="ee"
          :active="activeNum"
          bind:change="onChange2"
          @click="vanClick2"
          v-show="this.startTime.time != ''"
          class="startTime timeDeta"
        >
          <van-tab
            v-for="item in timer"
            :key="item.date2"
            :title="item.date  + item.date2"
            @click="vanClick"
          >
            <div class="van_content">
              <ul>
                <li
                  v-for="(item,index) in timers"
                  :key="index"
                  :class="{'van_active':item.active}"
                  @click="times2(item,index)"
                >
                  <p>{{item.time}}</p>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
        <div class="popup_bottom">
          <button @click="cancel2">重置</button>
          <button @click="confirm2">确定</button>
        </div>
      </van-popup>
    </div>
    <van-popup :close-on-click-overlay="false" v-model="show2">
      <h1>预约成功</h1>
      <p>已收到您的预约订单，请保持手机畅通，我们将尽快与您联系！您可以进入“我的”-“我的约看”页面查看详情。</p>
      <button @click="close">知道了</button>
      <div class="img">
        <div class="img_wrap">
          <img src="../../assets/img_yuyue_success.png" alt />
        </div>
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
      activeNum: 0,
      // 开始时间
      startTime: {
        id: 0,
        week: "今天06/01",
        time: ""
      },
      overTime: {
        id: 0,
        week: "今天06/01",
        time: ""
      },
      // 选择时间input内容
      timerInput: "",
      duration: 0,
      type: true,
      show: false,
      show2: false,
      showLives: false,
      // 请选择预约时间
      timerObj: {
        week: "",
        time: ""
      },
      form: {
        phone: "",
        name: "",
        time: ""
      },
      showAlert: false,
      items: [],
      activeId: 0,
      active: "null",
      activeIndex: 0,
      timer: [],
      // 天数
      timers: [],
      week: ""
    };
  },
  mounted() {
    if (this.$route.params.type == 1) {
      for (let i = 0; i < 7; i++) {
        this.items.push({
          // 导航名称
          id: i,
          text: this.getDate(i),
          children: []
        });
      }
      this.timerObj.week = this.getDate(0);
      this.getTime();
    } else {
      for (let i = 0; i < 7; i++) {
        this.timer.push({
          isBtn: true,
          date: "",
          date2: this.getDate(i)
        });
      }
      this.getLiveTime();
    }
  },
  methods: {
    // 租房时间接口
    getTime() {
      if (this.$route.params.type == 1) {
        let id = JSON.parse(window.sessionStorage.getItem("renting")).id;
        let myDate = new Date();
        // 当前月份
        let a = myDate.getMonth() + 1;
        if (a < 10) {
          a = "0" + a;
        }
        // 当前日期
        let b = myDate.getDate();
        if (b < 10) {
          b = "0" + b;
        }
        // 组合排列 07月07日
        let c = `${a}月${b}日`;
        let para = {
          space_work_id: id,
          look_date: c
        };
        this.$api.rentingList.getTime(para).then(res => {
          console.log(res);
          res.data.data.config.map((item, index) => {
            this.items[0].children.push({
              // 名称
              text: item,
              // id，作为匹配选中状态的标识符
              id: index + 1,
              // 禁用选项
              disabled: true
            });
          });
          res.data.data.time.filter(item => {
            for (let i = 0; i < this.items[0].children.length; i++) {
              if (item == this.items[0].children[i].text) {
                this.items[0].children[i].disabled = false;
              }
            }
          });
        });
        this.type = false;
      }
    },
    // 直播时间接口
    getLiveTime() {
      let id = JSON.parse(window.sessionStorage.getItem("liveDatas")).id;
      let myDate = new Date();
      // 当前月份
      let a = myDate.getMonth() + 1;
      if (a < 10) {
        a = "0" + a;
      }
      // 当前日期
      let b = myDate.getDate();
      if (b < 10) {
        b = "0" + b;
      }
      // 组合排列 07月07日
      let c = `${a}月${b}日`;
      let para = {
        space_live_id: id,
        use_date: c
      };
      this.$api.liveList.getLiveTime(para).then(res => {
        res.data.data.config.map((item, index) => {
          // 添加租房数据
          this.timers.push({
            id: index + 1,
            time: item,
            active: false,
            full: true,
            isBtn: false
          });
        });
      });
      this.startTime.week = this.getDate(0);
      this.overTime.week = this.getDate(0);
    },
    // 获取往后日期
    getDate(aa) {
      var date1 = new Date(),
        time1 = +(date1.getMonth() + 1) + "-" + date1.getDate(); //time1表示当前时间
      var date2 = new Date(date1);
      date2.setDate(date1.getDate() + aa);
      let a = date2.getMonth() + 1;
      let b = date2.getDate();
      if (a < 10) {
        a = "0" + a;
      }
      if (b < 10) {
        b = "0" + b;
      }
      var time2 = a + "月" + b + "日";
      return time2;
    },
    onChange(name, title) {},
    onChange2(name, title) {},
    closeHoure() {
      this.showLives = false;
      this.show = false;
    },
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
    cancel2() {
      console.log("我重置了");
      console.log(this.week);
      this.startTime = {
        id: 0,
        week: this.week,
        time: ""
      };
      this.overTime = {
        id: 0,
        week: this.week,
        time: ""
      };
      this.duration = 0;
      this.timers.forEach(item => (item.active = false));
    },
    // 租房确定
    confirm() {
      this.form.time = this.timerObj.week + this.timerObj.time;
      this.show = false;
    },
    // 直播确定
    confirm2() {
      this.timerInput = `${this.overTime.week} ${this.startTime.time}-${this.overTime.time}`;
      this.showLives = false;
      this.form.time = this.timerInput;
    },
    showHouse() {
      this.show = true;
    },
    close() {
      this.show2 = false;
      this.showLives = false;
      this.show = false;
      this.$router.push("/rentingList");
    },
    showLive() {},
    // 开始时间
    times(item, index) {
      console.log(item);
      console.log("选择开始时间");
      this.startTime.id = item.id;
      this.startTime.time = item.time;
      console.log(this.startTime);
      if (item.active) {
        item.active = false;
      } else {
        item.active = true;
      }
      this.timers.map(item1 => {
        if (item1.id < item.id) {
          item1.isBtn = false
          console.log()
        }
      });
      console.log(this.timers)

    },
    // 结束时间
    times2(item, index) {
      console.log("选择结束时间");
      console.log(item);
      this.overTime.id = item.id;
      this.overTime.time = item.time;
      this.week = this.overTime.week;
      this.duration = this.overTime.id - this.startTime.id;
      if (this.duration < 0) {
        this.duration = this.duration * -1;
      }
      this.timers.forEach(items => {
        if (items.id >= item.id) {
          items.active = false;
        }
      });
      if (item.active) {
        item.active = false;
      } else {
        item.active = true;
      }
      if (this.overTime.id > this.startTime.id) {
        this.timers.forEach(item => {
          if (item.id > this.startTime.id && item.id <= this.overTime.id) {
            item.active = true;
          }
        });
      } else {
        this.timers.forEach(item => {
          if (item.id <= this.startTime.id && item.id > this.overTime.id) {
            item.active = true;
          }
        });
      }
    },
    clickItem(e) {
      console.log(e.text);
      this.timerObj.time = e.text;
    },
    // 提交数据
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
        window.sessionStorage.setItem("formData", JSON.stringify(this.form));
        window.sessionStorage.setItem(
          "startTime",
          JSON.stringify(this.startTime)
        );
        window.sessionStorage.setItem(
          "overTime",
          JSON.stringify(this.overTime)
        );
        window.sessionStorage.setItem(
          "duration",
          JSON.stringify(this.duration)
        );
        this.$store.commit("changeFormData", this.form);
        this.$store.commit("changeStartTime", this.startTime);
        this.$store.commit("changeOverTime", this.overTime);
        this.$store.commit("changeDuration", this.duration);
        // console.log(this.duration)
        // console.log(this.$store.getters.getOverTime)
        this.$router.push("/orderform");
      }
      this.cancel2();
    },
    // onChange1(name,title){
    //   console.log(name)
    //   console.log(title)
    // },
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
    // 立即下单
    subscribe() {
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
        console.log(this.timerObj.time);
        let start = this.timerObj.time.split("-");
        let para = {
          id: JSON.parse(window.sessionStorage.getItem("renting")).id,
          name: this.form.name,
          phone: this.form.phone,
          time: this.timerObj.time,
          day: this.timerObj.week
        };
        console.log(para);
        this.$api.rentingList.subscribe(para).then(res => {
          console.log(res);
          if (res.data.code === 200) {
            console.log("成功");
            this.show2 = true;
          }
        });
      }
    },
    // 选择开始天数
    vanClick(index, title, e) {
      this.activeNum = index;
      this.overTime.week = title;
      this.timers.map(item => (item.active = false));
      this.startTime.week = title;
    },
    // 选择结束天数
    vanClick2(index, title) {
      console.log("选择结束天数");
      this.activeNum = index;
      this.overTime.week = title;
      this.startTime.week = title;
      console.log(this.startTime.week);
    },
    clickNav(e) {
      let time = "";
      let dates = this.items.map(item => {
        if (item.id == e) {
          time = item;
        }
      });
      let id = JSON.parse(window.sessionStorage.getItem("renting")).id;
      let para = {
        space_work_id: id,
        look_date: time.text
      };
      this.$api.rentingList.getTime(para).then(res => {
        res.data.data.config.map((item, index) => {
          this.items[e].children.push({
            // 名称
            text: item,
            // id，作为匹配选中状态的标识符
            id: index + 1,
            // 禁用选项
            disabled: true
          });
        });
        res.data.data.time.filter(item => {
          for (let i = 0; i < this.items[e].children.length; i++) {
            if (item == this.items[e].children[i].text) {
              this.items[e].children[i].disabled = false;
            }
          }
        });
      });
      console.log(this.items[e]);
      this.timerObj.week = this.items[e].text;
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

      .appointment_form_form_input2 p img {
        width: 16px;
        height: 28px;
      }
      .appointment_form_form_input2:nth-child(1) .yuan {
        border: 3px solid #43d39c;
      }
      .appointment_form_form_input2:nth-child(2) .yuan {
        border: 3px solid #43b0d3;
      }
      .appointment_form_form_input2:nth-child(3) .yuan {
        border: 3px solid #fa9702;
      }
      .appointment_form_form_input2 {
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
  .appointment_form_form_button2 {
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
    opacity: 0.5;
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
    position: relative;
    img {
      width: 30px;
      float: right;
      height: 30px;
      position: absolute;
      right: 30px;
      top: 9px;
    }
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
.dis {
  color: #c7c7c7 !important;
}
.retingsss {
  height: auto !important;
}
.livesss {
  height: 800px !important;
}

.img_wrap img {
  width: 120px;
  height: 108px;
  margin-left: -10px;
  margin-top: -19px;
}
.popup_timer {
  position: relative;
}
.popup_timer_right {
  position: absolute;
  left: 50%;
  top: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.xianxian {
  width: 1px;
  height: 60px;
  background: #dedede;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
// .startTime .van-tabs__wrap {
//   backghr
// }
// .startTime .van-tabs__wrap {
//   background: red !important;
// }
.startTime .van-tabs__wrap {
  background: red !important;
}
.van-tabs--line .van-tabs__wrap {
  height: 200px !important;
}

.popup_timer_none {
  font-size: 24px !important;
  font-family: PingFang-SC-Medium, PingFang-SC !important;
  font-weight: 500 !important;
  color: rgba(153, 153, 153, 1) !important;
  line-height: 33px !important;
}
</style>
<style scoped>
.appointment >>> .van-tabs--line .van-tabs__wrap {
  height: 88px !important;
  background: #f4f4f4;
}
.appointment >>> .van-tabs__wrap--scrollable .van-tabs__nav {
  background: #f4f4f4;
}
.appointment >>> .van-tabs__line {
  width: 0.48rem !important;
  height: 0.06667rem !important;
  background: rgba(250, 151, 2, 1) !important;
  width: 1.24667rem;
  transition-duration: 0.3s;
  transform: translateX(83.5px) translateX(-50%);
}
.topPoup {
  top: 49px !important;
}

.type-list-item {
  font-size: 26px;
  font-weight: 400;
  width: 100px;
  height: 23px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  position: relative;
}
.isBtn {
  background: #f4f4f4 !important;
  color: #c7c7c7 !important;
  opacity: 0.5;
}
</style>