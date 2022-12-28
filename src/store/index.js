import Vuex from 'vuex'
import Vue from 'vue'
import projects from './projects'
import about from './about'
import experience from './experience'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        projects,
        about,
        experience
    }
})
