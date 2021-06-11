import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    isSave: false,
    isClose: false,
    isDelete: false
  },
  mutations: {
    changeFormState(state){
      state.isOpen = !state.isOpen
    },
    changeCloseState(state){
      state.isClose = !state.isClose
    },
    changeDeleteState(state){
      state.isDelete = !state.isDelete
    },
    changeSaveState(state){
      state.isSave = !state.isSave
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{

  }
})
