const state = {
    // 租房信息
    liveDatas:{},
    // 开始时间
    startTime:{},
    // 结束时间
    overTime:{},
    // 个人信息
    formData:{},
    // 总共时长
    duration:''
}

const getters = {
    getLiveDatas: state => state.liveDatas,
    getStartTime: state => state.startTime,
    getOverTime: state => state.overTime,
    getFormData: state => state.formData,
    getDuration: state => state.duration
}

const mutations = {
    changeLiveDatas(state,data){
        state.liveDatas = data
    },
    changeStartTime(state,data){
        state.startTime = data
    },
    changeOverTime(state,data){
        state.overTime = data
    },
    changeFormData(state,data){
        state.formData = data
    },
    changeDuration(state,data){
        state.duration = data
    },
}

const actions = {

}

export default{
    state,
    getters,
    mutations,
    actions
}