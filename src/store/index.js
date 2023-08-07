// import { createStore } from 'vuex'
// export default createStore({
//   state: {
//     tasks:{}
//   },
//   getters: {
//     getTasks(state) {
//       console.log("getter",state.tasks)
//       return state.tasks
//     }
    
//   },
//   mutations: {
//     SET_TASKS(state, payload) {
//       console.log('payload from settask >>>>',payload)
//       state.tasks = payload
//     }
//   },
//   actions: {
//      createTask({commit},payload) {
//       const response =  localStorage.setItem(`${payload.title}`, `${payload.desc}`)
//       commit('SET_TASKS',response)
//     },
//      getTasks({commit}) {
//       const response =  localStorage.getItem('task')
//       console.log(" response" + response)
//       commit('SET_TASKS',response)
//     },
//     deleteTask( id) {
//       localStorage.removeItem(`${id}`)
//     }
//   }
// })

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
    }
  },
  actions: {
    createTask({ commit }, payload) {
      commit('ADD_TASK', payload)
    },
    deleteTask({ commit}, index) {
      commit('DELETE_TASK', index)
    }
  }
})


