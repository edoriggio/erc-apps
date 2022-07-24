import projects from '@/data/projects'

const state = {
    all: [],
    apps: [],
    projects: [],
    competitions: []
}

const actions = {
    getAll({commit}) {
        projects.getProjects(projects => {
            commit('receive_all', projects)
        })
    },
    getAllApps({commit}) {
        projects.getProjects(projects => {
            const filtered = projects.filter((project) => {
                return project.macro_category === 'App'
            })

            commit('receive_apps', filtered)
        })
    },
    getAllProjects({commit}) {
        projects.getProjects(projects => {
            const filtered = projects.filter((project) => {
                return project.macro_category === 'Project'
            })

            commit('receive_projects', filtered)
        })
    },
    getAllCompetitions({commit}) {
        projects.getProjects(projects => {
            const filtered = projects.filter((project) => {
                return project.macro_category === 'Competition'
            })

            commit('receive_competitions', filtered)
        })
    }
}

const mutations = {
    receive_all(state, projects) {
        state.all = projects
    },
    receive_apps(state, projects) {
        state.apps = projects
    },
    receive_projects(state, projects) {
        state.projects = projects
    },
    receive_competitions(state, projects) {
        state.competitions = projects
    }
}

const getters = {
    all(state) {
        return state.all
    },
    allApps(state) {
        return state.apps
    },
    allProjects(state) {
        return state.projects
    },
    allCompetitions(state) {
        return state.competitions
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
