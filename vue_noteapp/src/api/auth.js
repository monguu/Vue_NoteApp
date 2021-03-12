import { instance } from "@/api/index.js";

function signupUser(userData) {
  return instance.post("signup", userData);
}
// login API
function loginUser(userData) {
  return instance.post("login", userData);
}
export { signupUser, loginUser };
