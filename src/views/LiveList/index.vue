<template>
    <div class="liveList">
        <LiveList/>
    </div>
</template>

<script>
import LiveList from '../../components/LiveList/index' 

export default {
    name:"liveList",
    methods:{

    },
    components:{
        LiveList
    },
    mounted(){
        this.$api.liveList.getliveList().then(res => console.log(res))
    }
}
</script>

<style lang="less" scoped>
.liveList {
    width: 100%;
    padding: 0 30px;
}
</style>