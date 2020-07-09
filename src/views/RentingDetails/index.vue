<template>
  <div class="liveDetails">
    <div class="liveDetails_wrap">
      <van-swipe @change="onChange" style="width:100%">
        <van-swipe-item v-for="item in imgArr" :key="item.id">
          <img :src="item.img_url" alt />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{imgArr.length}}</div>
        </template>
      </van-swipe>
      <div class="liveDetails_wrap_title">
        <h1 class="txt_title">{{rentingData.work_sapce_name}}</h1>
      </div>
      <div class="liveDetails_wrap_rent">
        <ul>
          <li>
            <p class="txt_min">租金</p>
            <h1 class="txt_money">{{rentingData.price}}元/时起</h1>
          </li>
          <li>
            <p class="txt_min">工位</p>
            <h1 class="txt_money">{{rentingData.station}}个工位</h1>
          </li>
          <li>
            <p class="txt_min">面积</p>
            <h1 class="txt_money">{{rentingData.office_area}}㎡</h1>
          </li>
        </ul>
      </div>
      <div class="liveDetails_wrap_card">
        <div class="txt_card">
          <p>茶水间</p>
          <p>休闲区</p>
          <p>洽谈接待</p>
        </div>
      </div>
    </div>
    <div class="liveDetails_serve">
      <div class="liveDetails_serve_title">
        <h1 class="txt_title_min">设施服务</h1>
        <p class="txt_min" @click="toMore">更多</p>
      </div>
      <div class="liveDetails_serve_content">
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_traffic_nor.png" alt />
          <p>交通便利</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_baojie_nor.png" alt />
          <p>保洁服务</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_visit_nor.png" alt />
          <p>政要参观</p>
        </div>
        <div class="liveDetails_serve_content_box">
          <img src="../../assets/con_icon_light_nor.png" alt />
          <p>宽阔明亮</p>
        </div>
      </div>
    </div>
    <div class="liveDetails_synopsis paddd">
      <h1 class="txt_title_min">房源简介</h1>
      <p>{{rentingData.describe}}</p>
    </div>
    <div class="liveDetails_enter paddd">
      <div class="liveDetails_enter_title">
        <h1 class="txt_title_min">类似房源推荐</h1>
      </div>
      <div class="liveDetails_enter_list">
        <contentList />
      </div>
    </div>
    <div class="liveDetails_bottom paddd">
      <div class="liveDetails_bottom_love" @click="attention" v-show="attentioning">
        <div class="liveDetails_bottom_love_img">
          <img src="../../assets/bangong_icon_coll_nor.png" alt />
        </div>
        <div class="liveDetails_bottom_love_txt">关注</div>
      </div>
      <div class="liveDetails_bottom_love" @click="attention" v-show="!attentioning">
        <div class="liveDetails_bottom_love_img">
          <img src="../../assets/bangong_icon_coll_press.png" alt />
        </div>
        <div class="liveDetails_bottom_love_txt">已关注</div>
      </div>
      <div class="liveDetails_bottom_btn1">
        <button @click="toAppointment">立即预约</button>
      </div>
      <div class="liveDetails_bottom_btn2">
        <button>在线咨询</button>
      </div>
    </div>
    <div class="love" v-show="loveSucess">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>关注成功</p>
      </div>
    </div>
    <div class="love" v-show="loveError">
      <div class="love_img">
        <img src="../../assets/tip_icon_success.png" alt />
      </div>
      <div class="love_txt">
        <p>取消关注成功</p>
      </div>
    </div>
  </div>
</template>

<script>
import contentList from "../../components/ContentList/index";

export default {
  name: "liveDetails",
  data() {
    return {
      current: 0,
      attentioning: true,
      loveSucess: false,
      loveError: false,
      rentingData:{},
      imgArr:[]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    toAppointment() {
      this.$router.push(`/appointment/${1}`);
    },
    attention() {
      this.attentioning = !this.attentioning;
      if (this.attentioning) {
        console.log("我要取消关注")
        this.loveError = false;
        this.loveError = true;
        if(this.loveError){
          this.loveSucess = false;
        }
        setTimeout(() => {
          this.loveError = false;
        }, 1000);
      } else {
        console.log("我要关注")
        let para = {
          id:window.sessionStorage.getItem('userId'),
          follow_id:this.rentingData.follow_id,
          follow_type:1
        }
        this.$api.liveList.attention(para).then(res => console.log(res))
        this.loveSucess = false;
        this.loveSucess = true;
        if(this.loveSucess){
          this.loveError = false;
        }
        setTimeout(() => {
          this.loveSucess = false;
        }, 1000);
      }


    },
    toMore() {
      this.$router.push("/more");
    }
  },
  components: {
    contentList
  },
  mounted(){
    let para = {
      id:this.$route.params.id
    }
    this.$api.rentingList.getDetails(para).then(res => {
      // console.log(res.data.data)
      window.sessionStorage.setItem('renting',JSON.stringify(res.data.data.content))
      this.rentingData = res.data.data.content[0]
      this.imgArr = res.data.data.imgs
      console.log(this.rentingData)
    })
  }
};
</script>

<style lang="less" scoped>
.liveDetails {
  padding: 0 0 130px 0;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.liveDetails_wrap {
  padding: 0 30px;
  .liveDetails_wrap_title {
    margin-top: 30px;
  }
  .liveDetails_wrap_rent {
    margin-top: 50px;
    ul {
      display: flex;
      li:nth-child(1) {
        padding-left: 0;
        border: none;
      }
      li {
        flex: 1;
        border-left: 1px #dedede solid;
        padding-left: 30px;
      }
    }
  }
  .liveDetails_wrap_card {
    margin-top: 24px;
  }
}
.liveDetails_serve {
  padding: 0 30px;
  .liveDetails_serve_title {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .liveDetails_serve_content {
    margin-top: 15px;
    display: flex;
    .liveDetails_serve_content_box:nth-child(1) {
      margin-left: 0;
    }
    .liveDetails_serve_content_box {
      text-align: center;
      margin-left: 102px;
      img {
        height: 45px;
      }
      p {
        font-size: 24px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
        margin-top: 15px;
      }
    }
  }
}

.liveDetails_synopsis {
  margin-top: 45px;
  p {
    font-size: 24px;
    margin-top: 20px;
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    line-height: 33px;
  }
}

div.liveDetails_enter.paddd {
  margin-top: 40px;
  div.liveDetails_enter_title {
    h1.txt_title_min {
    }
  }
}
div.liveDetails_bottom {
  width: 100%;
  height: 130px;
  padding: 21px 0;
  display: flex;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
  left: 0;
  div.liveDetails_bottom_love {
    flex: 1;
    width: 66px;
    text-align: center;
    .liveDetails_bottom_love_img {
      width: 38px;
      height: 34px;
      margin-left: 35px;
      margin-top: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .liveDetails_bottom_love_txt {
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
      margin-top: 8px;
    }
  }

  div.liveDetails_bottom_btn1 {
    flex: 3;
    button {
      width: 286px;
      height: 88px;
      background: rgba(250, 151, 2, 1);
      border-radius: 6px;
      border: none;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }
  }

  div.liveDetails_bottom_btn2 {
    flex: 3;
    button {
      width: 286px;
      height: 88px;
      background: rgba(255, 186, 21, 1);
      border-radius: 6px;
      border: none;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: 540;
      color: rgba(255, 255, 255, 1);
      line-height: 45px;
    }
  }
}
div.love {
  width: 272px;
  height: 202px;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 34%;
  left: 34%;
  div.love_img {
    margin-top: 40px;
    margin-left: 101px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  div.love_txt {
    margin-top: 21px;
    p {
      font-size: 26px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 37px;
    }
  }
}
</style>