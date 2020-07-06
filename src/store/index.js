import Vue from 'vue'
import Vuex from 'vuex'
import lieData from './modules/liveData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lieData
  }
})
