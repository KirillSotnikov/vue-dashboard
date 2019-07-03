import Vue from 'vue'
import Vuex from 'vuex'
import team from './modules/team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    team
  }
})