const _skills = [
  {
    index: 1,
    name: 'Python',
    rate: 4,
    color: ['3776ab', '295980', '4594d6'],
    icon: 'python'
  },
  {
    index: 2,
    name: 'Vue.js',
    rate: 4,
    color: ['4fc08d', '3b906a', '63f0b0'],
    icon: 'vuedotjs'
  },
  {
    index: 3,
    name: 'GitHub',
    rate: 4,
    color: ['181717', '111111', '1f1d1d'],
    icon: 'github'
  },
  {
    index: 4,
    name: 'LaTeX',
    rate: 4,
    color: ['008080', '005c5c', '00a4a4'],
    icon: 'latex'
  },
  {
    index: 5,
    name: 'Linux',
    rate: 3,
    color: ['fcc624', 'b58f1a', 'fffd2e'],
    icon: 'linux'
  },
  {
    index: 6,
    name: 'Swift',
    rate: 3,
    color: ['fa7343', 'b45330', 'ff9356'],
    icon: 'swift'
  },
  {
    index: 7,
    name: 'C/C++',
    rate: 2,
    color: ['00599c', '004070', '0072c8'],
    icon: 'cplusplus'
  },
  {
    index: 8,
    name: 'MySQL',
    rate: 2,
    color: ['4479a1', '315774', '579bce'],
    icon: 'mysql'
  },
  {
    index: 9,
    name: 'Java',
    rate: 2,
    color: ['007396', '00536c', '0093c0'],
    icon: 'java'
  }
]

export default {
  getSkills (cb) {
    cb(_skills)
  }
}
