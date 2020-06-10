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
  components: {
    HomeTopBar,
    HomeContent
  }
};
</script>