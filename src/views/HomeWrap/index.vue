<template>
  <div class="home_wrap">
    <HomeTopBar />
    <HomeContent />
  </div>
</template>

<script>
import HomeTopBar from "../../components/HomeTopBar/index";
import HomeContent from "../../components/HomeContent/index";

export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    console.log(111)
    this.$api.home.getHome().then(res => console.log(res))
  },
  components: {
    HomeTopBar,
    HomeContent
  }
};
</script>