import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },
    UPDATE_TASK(state, index,data){
      state.tasks[index]= data
    },
    UPDATE_STATUS(state,index,status){
      state.tasks[index].status = status
    }
  },
  actions: {
    createTask({ commit }, payload) {
      console.log(payload)
      commit('ADD_TASK', payload)
    },
    deleteTask({ commit}, index) {
      commit('DELETE_TASK', index)
    },
    updateTask({commit}, {id, data}){
      console.log('id------>',id, '\n','data------>',data)
      commit('UPDATE_TASK',id,data)
  
    }
  }
})