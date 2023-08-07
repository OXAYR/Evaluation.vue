import { createStore } from 'vuex'
export default createStore({
  state: {
    tasks:[]
  },
  getters: {
    getTasks(state) {
      console.log("getter",state.tasks)
      return state.tasks
    }
  },
  mutations: {
    SET_TASKS(state, payload) {
      console.log('payload from settask >>>>',payload)
      state.tasks = payload
    }
  },
  actions: {
    async createTask(_,payload) {
      const response = await localStorage.setItem(`${payload.title}`, `${payload.desc}`)
      console.log(response)
    },
    async getTasks({commit},title) {
      const response = await localStorage.getItem(`${title}`)
      console.log(response)
      commit('SET_TASKS',response)
    },
    deleteTask( id) {
      localStorage.removeItem(`${id}`)
    }
  }
})
