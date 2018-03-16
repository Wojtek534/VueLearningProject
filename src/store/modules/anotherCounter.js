export default {
  state: {
    counter: 0
  },
  getters: {
    getCounter (state) {
      return state.counter
    },
    doubleCounter (state) {
      return state.counter * 2
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state) => {
      state.counter--
    }
  },
  actions: {
    increment: (context, payload) => {
      setTimeout(() => {
        context.commit('increment', payload.number)
      }, payload.time)
    }
  },
  namespaced: false
}
