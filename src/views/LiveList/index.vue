<template>
    <div class="liveList">
        <contentList/>
    </div>
</template>

<script>
import contentList from '../../components/ContentList/index' 

export default {
    name:"liveList",
    methods:{

    },
    components:{
        contentList
    }
}
</script>

<style lang="less" scoped>
.liveList {
    width: 100%;
    padding: 0 30px;
}
</style>