const _skills = [
    {
        name: 'Python',
        rate: 5,
        color: ['3776ab', '295980'],
        icon: 'python'
    },
    {
        name: 'Vue.js',
        rate: 5,
        color: ['4fc08d', '3b906a'],
        icon: 'vuedotjs'
    },
    {
        name: 'Git',
        rate: 4,
        color: ['f05032', 'ad3a24'],
        icon: 'git'
    },
    {
        name: 'LaTeX',
        rate: 5,
        color: ['008080', '005c5c'],
        icon: 'latex'
    },
    {
        name: 'Linux',
        rate: 3,
        color: ['fcc624', 'b58f1a'],
        icon: 'linux'
    },
    {
        name: 'Swift',
        rate: 3,
        color: ['fa7343', 'b45330'],
        icon: 'swift'
    },
    {
        name: 'C/C++',
        rate: 3,
        color: ['00599c', '004070'],
        icon: 'cplusplus'
    },
    {
        name: 'MySQL',
        rate: 2,
        color: ['4479a1', '315774'],
        icon: 'mysql'
    },
    {
        name: 'Java',
        rate: 2,
        color: ['007396', '00536c'],
        icon: 'java'
    },
    {
        name: 'Vue Native',
        rate: 4,
        color: ['4fc08d', '3b906a'],
        icon: 'vuedotjs'
    },
    {
        name: 'Docker',
        rate: 1,
        color: ['2ec0ff', '1a6cab'],
        icon: 'docker'
    }
]

export default {
    getSkills (cb) {
        cb(_skills)
    }
}
