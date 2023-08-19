// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     tasks: [],
//     count:0,
//   },
//   getters: {
//     getTasks(state) {
//       return state.tasks
//     },
//     getFilteredTasks(state) {
//       if (state.statusFilter === "All") {
//         return state.tasks;
//       } else {
//         return state.tasks.filter(task => task.status === state.statusFilter);
//       }
//     },
    
//   },
//   mutations: {
//     ADD_TASK(state, task) {
//       const taskNew={
//         ...task,
//          id:++state.count}
//       state.tasks.push(taskNew)
//     },
//     DELETE_TASK(state, index) {
//       state.tasks.splice(index, 1)
//     },
//     UPDATE_TASK(state, { index, data }) { 
//       console.log(" in mutation ", 'index---->', index, 'data----->', data);
//       state.tasks.splice(index, 1, data);
//     },
//     UPDATE_STATUS(state,{index,status}){
//       console.log(" in mutation ", 'index---->', index, 'status----->', status);
//       state.tasks[index].status = status
//     }
//   },
//   actions: {
//     createTask({ commit }, payload) {
//       // this.state.count++;
//       commit('ADD_TASK', payload)
//     },
//     deleteTask({ commit}, index) {
//       commit('DELETE_TASK', index)
//     },
//     updateTask({ commit }, { id, data }) {
//       console.log("in action", 'id------>', id, '\n', 'data------>', data);
//       commit('UPDATE_TASK', { index: id, data }); // Call the mutation with index and data
//     },
//     updateStatus({commit}, { id, status }){
//       console.log("in action", 'id------>', id, '\n', 'status------>', status);
//       commit('UPDATE_STATUS' ,{ index: id, status })
//     },
    

//   }
// })



import Vuex from 'vuex'
import axios from 'axios'


export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getTasks(state) {
      return state.todos
    },
    getTaskById(state) {
      return state.id
    }
  },
  mutations: {
    SET_TODO(state, payload) {
      state.todos = payload
    },
    SET_TODO_BY_ID(state, payload) {
      state.todos = payload
    },
    REMOVE_TODO(state, todoId) {
      state.todos.splice(todoId,1)
    }
  },
  actions: {
    async createTask(_, payload) {
      try {
        const { data } = await axios.post('/api/todoList/todo', payload)
        console.log(data)
      } catch (error) {
        console.error('Error creating todo:', error)
      }
    },
    async getTask({ commit }) {
      try {
        const { data } = await axios.get('/api/todoList/todo')
        commit('SET_TODO', data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
    // async getTaskByID({ commit }, id) {
    //   try {
    //     const { data } = await axios.get(`/api/todoList/${id}`)
    //     commit('SET_TODO_BY_ID', data)
    //   } catch (error) {
    //     console.error('Error fetching todo by ID:', error)
    //   }
    // },
    async updateTask({ commit }, { id, updateTodo }) {
      console.log(" in the action ----> ",id)
      try {
        const { data } = await axios.patch(`/api/todoList/${id}`, updateTodo)
        commit('SET_TODO', data)
      } catch (error) {
        console.error('Error updating todo:', error)
      }
    },
    async deleteTask({ commit }, id ) {
      try {
        console.log(id)
        await axios.delete(`/api/todoList/${id}`)
        commit('REMOVE_TODO', id) 
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    }
    
  },
  modules: {}
})
