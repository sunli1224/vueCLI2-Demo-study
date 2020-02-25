import {ADDCOUNT, ADDSTATEMUT, DELCOUNT} from '../mutation-types'
import Vue from 'vue'

export const mutations = {
  [ADDCOUNT] (state) {
    state.count++ // 数据修改放在mutations
  },
  [DELCOUNT] (state) {
    state.count--
  },
  [ADDSTATEMUT] (state, payload) {
    Vue.set(state.stuObejct, 'sex', payload.sex)
  }
}
