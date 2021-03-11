import Vue from "vue";
import Vuex from "vuex";
import { loginUser } from "@/api/index.js";
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  getAuthFromCookie,
  deleteCookie,
} from "@/utils/cookies.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    // password: "",
    // nickname: "",
    // logView: "",
    // logmessage: "",
    token: getAuthFromCookie() || "",
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
      deleteCookie(state);
    },
    getToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN(context, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      context.commit("getToken", data.token);
      context.commit("getUserName", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
