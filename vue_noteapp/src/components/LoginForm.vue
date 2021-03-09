<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PS: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <button v-bind:disabled="!isUserValid || !password" type="submit">
        Login
      </button>
    </div>
    <p>{{ logmessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api/index.js";
import { validateEmail } from "@/utils/validation.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      logmessage: "",
    };
  },
  computed: {
    isUserValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data);
        this.logmessage = `${data.user.username} 님 환영합니다.`;
      } catch (err) {
        this.logmessage = `${err.response.data}`;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
