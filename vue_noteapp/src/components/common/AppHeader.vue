<template>
  <header class="header">
    <div>
      <div class="logo">
        <h1 class="logotext">
          <router-link :to="logoclick">mong crud</router-link>
        </h1>
      </div>
      <div class="headerlog">
        <template v-if="isLogin">
          <span class="HeaderUserName">{{ $store.state.username }}</span>
          <button v-on:click="isLogout">로그아웃</button>
        </template>
        <template v-else>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "@/utils/cookies.js";
// import store from "@/store/index.js";
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    logoclick() {
      return this.$store.getters.isLogin ? "/main" : "/login";
    },
  },
  methods: {
    isLogout() {
      this.$store.commit("logoutUser");
      this.$store.commit("deleteToken");
      deleteCookie("auth");
      deleteCookie("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  background-color: rgb(30, 238, 210);
}
.HeaderUserName {
  color: rgb(196, 22, 22);
}
.logotext {
  text-transform: uppercase;
}
.logo {
  float: left;
}
.headerlog {
  float: right;
}
</style>
