import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchQuery: ""
  },
  mutations: {
    setSearchQuery (state, s) {
        state.searchQuery = s;
    }
  },
  actions: {
    setSearchQuery (state, s) {
        state.commit('setSearchQuery', s);
    }
  },
  getters: {
      getSearchQuery (state) {
          return state.searchQuery;
      }
  },
})

export default store;