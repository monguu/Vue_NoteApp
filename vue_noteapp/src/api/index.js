import axios from "axios";
// import store from "@/store/index.js";
import { getInterceptor } from "@/api/common/interceptor.js";
// import { signupUser, loginUser } from "@/api/auth.js";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function initInstance(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });
  return getInterceptor(instance);
}

export const instance = createInstance();
export const basePostInstance = initInstance("posts");
