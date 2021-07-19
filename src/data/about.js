const _skills = [
  {
    index: 1,
    name: 'Python',
    rate: 4,
    color: ['3776ab', '295980'],
    icon: 'python'
  },
  {
    index: 2,
    name: 'Vue.js',
    rate: 4,
    color: ['4fc08d', '3b906a'],
    icon: 'vuedotjs'
  },
  {
    index: 3,
    name: 'Git',
    rate: 4,
    color: ['f05032', 'ad3a24'],
    icon: 'git'
  },
  {
    index: 4,
    name: 'LaTeX',
    rate: 4,
    color: ['008080', '005c5c'],
    icon: 'latex'
  },
  {
    index: 5,
    name: 'Linux',
    rate: 3,
    color: ['fcc624', 'b58f1a'],
    icon: 'linux'
  },
  {
    index: 6,
    name: 'Swift',
    rate: 3,
    color: ['fa7343', 'b45330'],
    icon: 'swift'
  },
  {
    index: 7,
    name: 'C/C++',
    rate: 2,
    color: ['00599c', '004070'],
    icon: 'cplusplus'
  },
  {
    index: 8,
    name: 'MySQL',
    rate: 2,
    color: ['4479a1', '315774'],
    icon: 'mysql'
  },
  {
    index: 9,
    name: 'Java',
    rate: 2,
    color: ['007396', '00536c'],
    icon: 'java'
  }
]

export default {
  getSkills (cb) {
    cb(_skills)
  }
}
