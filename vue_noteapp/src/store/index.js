import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    nickname: "",
    logView: "",
    logmessage: "",
    token: "",
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    getUserName(state, username) {
      state.username = username;
    },
    logoutUser(state) {
      state.username = "";
    },
    getToken(state, token) {
      state.token = token;
    },
  },
});
