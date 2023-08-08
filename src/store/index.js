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
//     deleteTask(_,id) {
//       localStorage.removeItem(`${id}`)
//     }
//   }
// })

import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    status: [{name: 'In-Progress', color: 'blue'}, {name: 'Completed', color: 'green'}, {name: 'Pending', color: 'yellow'}]
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


// import axios from 'axios'
// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     tasks: {},
//     status: [{ name: 'In-Progress' }, { name: 'Completed' }, { name: 'Pending' }]
//   },
//   getters: {
//     getTasks(state) {
//       return state.tasks
//     }
//   },
//   mutations: {
//     SET_TASKS(state, tasks) {
//       state.tasks = tasks
//     },
//     ADD_TASK(state, task) {
//       // Assuming each task has a unique identifier 'id'
//       state.tasks[task.id] = task
//     },
//     DELETE_TASK(state, taskId) {
//       // Assuming each task has a unique identifier 'id'
//       delete state.tasks[taskId]
//     }
//   },
//   actions: {
//     async fetchTasks({ commit }) {
//       try {
//         const response = await axios.get('/tasks')
//         commit('SET_TASKS', response.data)
//       } catch (error) {
//         console.error('Error fetching tasks:', error)
//       }
//     },
//     async createTask({ commit }, task) {
//       try {
//         const response = await axios.post('/tasks', task)
//         commit('ADD_TASK', response.data)
//       } catch (error) {
//         console.error('Error creating task:', error)
//       }
//     },
//     async deleteTask({ commit }, taskId) {
//       try {
//         await axios.delete(`/tasks/${taskId}`)
//         commit('DELETE_TASK', taskId)
//       } catch (error) {
//         console.error('Error deleting task:', error)
//       }
//     }
//   }
// })


