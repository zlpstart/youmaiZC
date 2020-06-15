<template>
  <div class="detail">
    <van-tabs v-model="active">
      <van-tab title="全部">
          <detailList/>
      </van-tab>
      <van-tab title="收入">内容 2</van-tab>
      <van-tab title="支出">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import detailList from '../../components/DetailList/index'

export default {
  name: "detail",
  data() {
    return {
        active: 0
    }
  },
  components:{
      detailList
  }
};
</script>

<style lang="less" scoped>
</style>