import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    searchQuery: ""
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    setSearchQuery (state, s) {
        state.searchQuery = s;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    setSearchQuery (state, s) {
        state.commit('setSearchQuery', s);
    }
  },
  getters: {
      getCount(state) {
          return state.count;
      },
      getSearchQuery (state) {
          return state.searchQuery;
      }
  },
})

export default store;