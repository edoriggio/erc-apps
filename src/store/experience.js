import jobs from '@/data/experience'
import education from '@/data/experience'


const state = {
    jobs: [],
    education: []
}

const actions = {
    getJobs({commit}) {
        jobs.getJobs(jobs => {
            commit('receive_jobs', jobs)
        })
    },
    getEducation({commit}) {
        education.getEducation(education => {
            commit('receive_education', education)
        })
    }
}

const mutations = {
    receive_jobs(state, jobs) {
        state.jobs = jobs
    },
    receive_education(state, education) {
        state.education = education
    }
}

const getters = {
    jobs(state) {
        return state.jobs
    },
    education(state) {
        return state.education
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
