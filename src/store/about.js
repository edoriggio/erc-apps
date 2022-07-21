import about from '@/data/about'

const state = {
    skills: []
}

const actions = {
    getSkills({commit}) {
        about.getSkills(skills => {
            commit('receive_skills', skills)
        })
    }
}

const mutations = {
    receive_skills(state, skills) {
        state.skills = skills
    }
}

const getters = {
    skills(state) {
        return state.skills
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
