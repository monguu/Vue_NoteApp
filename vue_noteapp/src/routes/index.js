import Vue from "vue";
import VueRouter from "vue-router";
// import LoginPage from "@/views/LoginPage";
// import SignUpPage from "@/views/SignUpPage";

Vue.use(VueRouter);

export default new VueRouter({
  // 배포시 history 추가 작업 필요함,(VueRouter 공식문서 참고)
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignUpPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage.vue"),
    },
    {
      path: "/add",
      component: () => import("@/views/AddPage.vue"),
    },
    {
      path: "/post/:id",
      component: () => import("@/views/editPage.vue"),
    },
  ],
});
