<template>
  <div class="addContents">
    <h1 class="add-header">게시판 작성</h1>
    <div class="add-round">
      <form class="add-form" v-on:submit.prevent="submitForm">
        <div>
          <label for="title">제목: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">내용: </label>
          <textarea
            id="contents"
            type="text"
            v-model="contents"
            class="contentinput"
            rows="5"
          />
          <p v-if="!isContentVaild" class="vaild-text warning">
            내용은 50자 내로 입력해주세요.
          </p>
        </div>
        <div>
          <label for="">태그등록: </label>
          <input type="text" />
        </div>
        <button type="submit" class="add-btn">게시물 등록</button>
        <h4>
          {{ failedLogMsg }}
        </h4>
      </form>
    </div>
  </div>
</template>

<script>
import { createPost } from "@/api/post.js";
export default {
  data() {
    return {
      title: "",
      contents: "",
      failedLogMsg: "",
    };
  },
  computed: {
    isContentVaild() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const getData = {
          title: this.title,
          contents: this.contents,
        };
        const response = await createPost(getData);
        console.log(response);
        this.clearForm();
        this.$router.push("/main");
      } catch (err) {
        const errMsg = (err.response.data.message =
          "같은 게시물이 존재합니다.");
        this.failedLogMsg = err.response.data.message;
        alert(errMsg);
      }
    },
    clearForm() {
      this.title = "";
      this.contents = "";
    },
  },
};
</script>

<style>
.add-btn {
  margin: 10px;
  font-style: bold;
  font-size: 15px;
  color: #fff;
  background-color: rgb(8, 228, 228);
  width: 100px;
  height: 50px;
  border: 2px solid rgb(18, 170, 145);
  border-radius: 20px;
}
.contentinput {
  width: 300px;
  height: 100px;
}
</style>
