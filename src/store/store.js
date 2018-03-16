import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './modules/counter'
import Another from './modules/anotherCounter'
import * as actions from './modules/actions'
Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules: {
    Another
  }
})
