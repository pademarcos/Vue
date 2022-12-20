import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo:null,
    listaUsuarios:[{nombre:"qqq", password:"111"}]
  },
  getters: {
    getUsuActivo(state){
      return state.usuarioActivo;
    }
  },
  mutations: {
    modificarUsuActivo(state, nuevoUsuario){
      state.usuarioActivo=nuevoUsuario;
    },
    desloguearUsuario(state){
      state.usuarioActivo=null;
    }
  },
  actions: {
  },
  modules: {
  }
})
