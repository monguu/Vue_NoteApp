import Vue from "vue";
import Vuex from "vuex";
import { loginUser } from "@/api/auth.js";
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  getAuthFromCookie,
} from "@/utils/cookies.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
    // password: "",
    // nickname: "",
    // logView: "",
    // logmessage: "",
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
    // 쿠키값 삭제 구문추가 예정
    deleteToken(state) {
      state.token = "";
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
