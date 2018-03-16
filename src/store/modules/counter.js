const state = {
  counter: 0
}
const getters = {
  getCounter (state) {
    return state.counter
  },
  doubleCounter (state) {
    return state.counter * 2
  }
}
const mutations = {
  increment: (state, payload) => {
    state.counter += payload
  },
  decrement: (state) => {
    state.counter--
  }
}
const actions = {
  increment: (context, payload) => {
    setTimeout(() => {
      context.commit('increment', payload.number)
    }, payload.time)
  }
}
export default {
  state: state,
  getters,
  mutations: mutations,
  actions: actions
}
