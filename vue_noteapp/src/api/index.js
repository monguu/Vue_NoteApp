import axios from "axios";
import store from "@/store/index.js";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: store.state.token,
  },
});

function signupUser(userData) {
  return instance.post("signup", userData);
}
function loginUser(userData) {
  return instance.post("login", userData);
}

export { signupUser, loginUser };
