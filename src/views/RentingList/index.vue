<template>
  <div class="rentingList">
    <!-- <div class="rentingList_wrap">
      <div class="rentingList_top">
        <div class="rentingList_top_box">
          <p>整租面积</p>
          <img src="../../assets/bangong_icon_xiala_nor.png" alt />
        </div>
        <div class="rentingList_top_box">
          <p>工位数量</p>
          <img src="../../assets/bangong_icon_xiala_nor.png" alt />
        </div>
        <div class="rentingList_top_box">
          <p>租金价格</p>
          <img src="../../assets/bangong_icon_xiala_nor.png" alt />
        </div>
      </div>
    </div>-->
    <van-dropdown-menu active-color="#FA9702">
      <van-dropdown-item title-class="dropdown_zlp" title="整租面积" v-model="value1" :options="option1" />
      <van-dropdown-item title="工位数量" v-model="value2" :options="option2" />
      <van-dropdown-item title="租金价格" v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <div class="rentingList_content">
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div class="rentingList_content_box_txt_h1">
            <h1 class="txt_medium">软件谷科创城C1栋5楼504</h1>
          </div>
          <div class="rentingList_content_box_txt_span">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              100个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              500.00㎡面积
            </p>
          </div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥4800/月</p>
          </div>
        </div>
      </div>
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div class="rentingList_content_box_txt_h1">
            <h1 class="txt_medium">软件谷科创城C1栋5楼504</h1>
          </div>
          <div class="rentingList_content_box_txt_span">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              100个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              500.00㎡面积
            </p>
          </div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥4800/月</p>
          </div>
        </div>
      </div>
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div class="rentingList_content_box_txt_h1">
            <h1 class="txt_medium">软件谷科创城C1栋5楼504</h1>
          </div>
          <div class="rentingList_content_box_txt_span">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              100个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              500.00㎡面积
            </p>
          </div>
          <div class="rentingList_content_box_txt_card txt_card">
            <p>茶水间</p>
            <p>路演厅</p>
          </div>
          <div class="rentingList_content_box_txt_money">
            <p class="txt_money">¥4800/月</p>
          </div>
        </div>
      </div>
      <div class="rentingList_content_box">
        <div class="rentingList_content_box_img">
          <img src="../../assets/ceshi.jpg" alt />
        </div>
        <div class="rentingList_content_box_txt">
          <div class="rentingList_content_box_txt_h1">
            <h1 class="txt_medium">软件谷科创城C1栋5楼504</h1>
          </div>
          <div class="rentingList_content_box_txt_span">
            <p class="txt_min">
              <img src="../../assets/bangong_icon_chair_nor.png" alt />
              100个工位
            </p>
            <p class="txt_min">
              <img src="../../assets/bangong_icon_mianji_nor.png" alt />
              500.00㎡面积
            </p>
          </div>
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
import "../../styles/layout.css";

export default {
  data(){
    return {
      value1: 1,
      value2: 1,
      value3: 1,
      option1: [
        { text: '面积选择', value: 0 },
        { text: '全部', value: 1 },
        { text: '100-150㎡', value: 2 },
        { text: '150-300㎡', value: 3 },
        { text: '300-500㎡', value: 4 },
        { text: '500㎡及以上', value: 5 },
      ],
      option2: [
        { text: '工位选择', value: 0 },
        { text: '全部', value: 1 },
        { text: '0-20个工位', value: 2 },
        { text: '20-50个工位', value: 3 },
        { text: '50-150个工位', value: 4 },
        { text: '150个工位及以上', value: 5 }
      ],
      option3: [
        { text: '租金价格', value:0 },
        { text: '全部', value: 1 },
        { text: '1500-2000元', value: 2 },
        { text: '2000-4000元', value: 3 },
        { text: '4000-6000元', value: 4 },
        { text: '6000元及以上', value: 5 },
      ],
    }
  }
};
</script>

<style lang="less" scoped>
div.rentingList {
  width: 100%;
  height: 88px;
  background: rgba(255, 255, 255, 1);
  div.rentingList_top {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    div.rentingList_top_box {
      display: flex;
      p {
        font-size: 24px;
        line-height: 88px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }

      img {
        width: 14px;
        height: 9px;
        margin-top: 37px;
        margin-left: 11px;
      }
    }
  }
}

div.rentingList_content {
  padding: 0 30px;
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
</style>