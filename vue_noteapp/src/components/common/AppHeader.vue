<template>
  <header class="header">
    <div>
      <div class="logo">
        <h1 class="logotext"><a href="/">mong crud</a></h1>
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
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    isLogout() {
      this.$store.commit("logoutUser");
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
