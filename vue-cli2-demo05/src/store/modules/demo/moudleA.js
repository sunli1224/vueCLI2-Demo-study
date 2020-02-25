export const moudleA = {
  state: {
    msg: 'hello Vue',
    stuObejct: 'hello my dear'
  },
  mutations: {},
  actions: {},
  getters: {
    getMsg (state) {
      return state.msg
    },
    getMixMsg (state, getters, rootState) {
      return state.msg + rootState.stuObejct.name
    }
  }
}
