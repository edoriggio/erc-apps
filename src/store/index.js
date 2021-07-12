import Vuex from 'vuex'
import Vue from 'vue'
import projects from './projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects
  }
})
