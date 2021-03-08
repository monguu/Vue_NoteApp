import Vue from "vue";
import VueRouter from "vue-router";
// import LoginPage from "@/views/LoginPage";
// import SignUpPage from "@/views/SignUpPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignUpPage.vue"),
    },
  ],
});
