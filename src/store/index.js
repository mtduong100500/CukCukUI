import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // CreatedBy : MTDUONG(21/6/2021)
    // Trạng thái mở của Form
    isOpen: false,
    // Trạng thái khi ấn nút lưu
    isSave: false,
    // Trạng thái khi ấn nút Đóng
    isClose: false,
    // Trạng thái khi ấn nút xóa 
    isDelete: false
  },
  mutations: {
    // Thay đổi trạng thái
    // CreatedBy : MTDUONG(21/6/2021) 
    
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
