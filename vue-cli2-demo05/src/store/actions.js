export const actions = {
  addCountAction ({commit, state}) {
    commit('addCount') // 逻辑处理放在actions
  },
  delCountAction (context) {
    context.commit('delCount')
  },
  addStateAction (context, val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('addStateMUT', val)
        resolve('添加成功')
      }, 1000)
    })
  }
}
