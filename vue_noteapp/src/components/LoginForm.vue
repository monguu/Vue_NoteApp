<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input
        id="username"
        type="text"
        v-model="username"
        placeholder="이메일 입력"
      />
      <div class="valid-userText">
        <div class="failduserText" v-if="!isUserValid && username">
          이메일 형식으로 작성해주세요.
        </div>
      </div>
    </div>
    <div>
      <label for="password">PS: </label>
      <input
        id="password"
        type="text"
        v-model="password"
        placeholder="패스워드 입력"
      />
    </div>
    <div>
      <button
        v-bind:disabled="!isUserValid || !password"
        type="submit"
        :class="!isUserValid || !password ? 'disabled' : null"
      >
        Login
      </button>
    </div>
    <p>{{ logmessage }}</p>
  </form>
</template>

<script>
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
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
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

<style>
.failduserText {
  color: rgb(238, 16, 16);
}
</style>
