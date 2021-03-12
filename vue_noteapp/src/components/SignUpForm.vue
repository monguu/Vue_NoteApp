<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PS :</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Name : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      v-bind:disabled="!isSignUpValid || !password || !nickname"
      type="submit"
    >
      Sign Up
    </button>
    <p>{{ logView }}</p>
  </form>
</template>

<script>
import { signupUser } from "@/api/auth.js";
import { validateEmail } from "@/utils/validation.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logView: "",
    };
  },
  computed: {
    isSignUpValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log("form test1");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await signupUser(userData);
      this.logView = `${data.username}, 님이 가입되었습니다.`;
      this.initFrom();
      console.log(this.username);
    },
    initFrom() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style></style>
