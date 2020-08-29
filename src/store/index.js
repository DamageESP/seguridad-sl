import Vue from 'vue'
import Vuex from 'vuex'
import { addUser, editUser } from '../../lib/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentEmpleadoId: null,
    empleados: [],
    loading: false,
  },
  mutations: {
    addEmpleado({ empleados }, newEmpleado) {
      empleados.push(newEmpleado)
    },
    removeEmpleado({ empleados }, empleadoId) {
      empleados.splice(empleados.findIndex(e => e.id === empleadoId), 1)
    },
    editEmpleado({ empleados }, newEmpleadoData) {
      const index = empleados.findIndex(e => e.id === newEmpleadoData.id)
      Object.assign(empleados[index], newEmpleadoData)
    },
    setCurrentEmpleadoId(state, newState) {
      state.currentEmpleadoId = newState
    },
    setEmpleados(state, empleadosList) {
      state.empleados = empleadosList
    },
    setLoading(state, newLoading) {
      state.loading = newLoading
    }
  },
  actions: {
    async addEmpleadoToFirebase({ commit }, newEmpleado) {
      commit('setLoading', true)
      try {
        await addUser(newEmpleado)
      } catch(err) {
        console.error(err)
      }
      commit('setLoading', false)
      commit('setCurrentEmpleadoId', null)
    },
    async editEmpleadoOnFirebase({ commit }, newEmpleadoData) {
      commit('setLoading', true)
      try {
        await editUser(newEmpleadoData)
      } catch(err) {
        console.error(err)
      }
      commit('setLoading', false)
      commit('setCurrentEmpleadoId', null)
    },
  },
})
