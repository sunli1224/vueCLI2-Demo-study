import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import {actions} from './actions'
import {modules} from './modules/modules'

Vue.use(Vuex)
// 根节点state
const state = {
  count: 0,
  stuList: [
    {
      name: 'kobe',
      age: 24
    },
    {
      name: 'James',
      age: 6
    },
    {
      name: 'curry',
      age: 30
    },
    {
      name: 'Harden',
      age: 13
    }
  ],
  stuObejct: {
    name: 'zhangsan',
    age: 24
  }
}
// 根节点 getters
const getters = {
  getStuObject (state, getters) {
    return state.stuObejct
  },
  getCount (state, getters) {
    return state.count
  },
  getStuList (state, getters) {
    return state.stuList
  },
  getStuListLength (state, getters) {
    return getters.getStuList.length
  },
  get15StuList (state, getters) {
    return getters.getStuList.filter(item => item.age >= 15)
  },
  getStuListByUser (state, getters) {
    return val => {
      return getters.getStuList.filter(item => item.age >= val)
    }
  }
}

const Store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default Store
