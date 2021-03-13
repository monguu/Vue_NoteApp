import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
// import LoginPage from "@/views/LoginPage";
// import SignUpPage from "@/views/SignUpPage";

Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: {
        auth: true,
      },
    },
    {
      path: "/add",
      component: () => import("@/views/AddPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/post/:id",
      component: () => import("@/views/editPage.vue"),
      meta: {
        auth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log("인증 필요 ! ");
    next("/login");
    return;
  }
  console.log(to, from);
  next();
});

export { router };
