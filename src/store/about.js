import about from '@/data/about'
import languages from "@/data/about";
import experience from "@/data/about"

const state = {
    skills: [],
    languages: [],
    experience: []
}

const actions = {
    getSkills({commit}) {
        about.getSkills(skills => {
            commit('receive_skills', skills)
        })
    },
    getLanguages({commit}) {
        languages.getLanguages(languages => {
            commit('receive_languages', languages)
        })
    },
    getExperience({commit}) {
        experience.getExperience(experience => {
            commit('receive_experience', experience)
        })
    }
}

const mutations = {
    receive_skills(state, skills) {
        state.skills = skills
    },
    receive_languages(state, languages) {
        state.languages = languages
    },
    receive_experience(state, experience) {
        state.experience = experience
    }
}

const getters = {
    skills(state) {
        return state.skills
    },
    languages(state) {
        return state.languages
    },
    experience(state) {
        return state.experience
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
