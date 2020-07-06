<template>
  <div class="rentingList">
    <van-dropdown-menu active-color="#FA9702">
      <van-dropdown-item title-class="dropdown_zlp" title="整租面积" v-model="value1" :options="option1" />
      <van-dropdown-item title="工位数量" v-model="value2" :options="option2" />
      <van-dropdown-item title="租金价格" v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <div class="rentingList_list">
      <RentingList />
    </div>
  </div>
</template>

<script>
import "../../styles/layout.css";
import RentingList from '../../components/RentingList/index'

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
  },
  components:{
    RentingList
  },
  methods:{
    toWorkDetails(){
      this.$router.push('/workDetails')
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
.rentingList_list {
  padding: 0 30px;
}


</style>