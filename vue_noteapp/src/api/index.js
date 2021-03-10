import axios from "axios";
// import store from "@/store/index.js";
import { getInterceptor } from "@/api/common/interceptor.js";

function initInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });
  return getInterceptor(instance);
}
const instance = initInstance();

// signup API
function signupUser(userData) {
  return instance.post("signup", userData);
}
// login API
function loginUser(userData) {
  return instance.post("login", userData);
}

function getPost() {
  return instance.get("posts");
}

export { signupUser, loginUser, getPost };
