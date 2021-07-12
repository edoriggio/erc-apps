import projects from '@/data/projects'

const state = {
  all: []
}

const actions = {
  getAllProjects ({commit}) {
    projects.getProjects(projects => {
      commit('recieve_projects', projects)
    })
  }
}

const mutations = {
  recieve_projects (state, projects) {
    state.all = projects
  }
}

const getters = {
  allProjects (state) {
    return state.all
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
