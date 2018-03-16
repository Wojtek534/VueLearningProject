export const incrementAction = (context, payload) => {
  setTimeout(() => {
    context.commit('increment', payload.number)
  }, payload.time)
}
