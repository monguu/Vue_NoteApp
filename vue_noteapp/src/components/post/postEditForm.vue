<template>
  <div class="addContents">
    <h1 class="add-header">게시판 수정</h1>
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
        <button v-bind:disabled="!isContentVaild" type="submit" class="add-btn">
          게시물 등록
        </button>
        <h4>
          {{ failedLogMsg }}
        </h4>
      </form>
    </div>
  </div>
</template>

<script>
import { editSavePost } from "@/api/post.js";
import { editedPost } from "@/api/post.js";
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
      return this.contents.length <= 50;
    },
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        await editSavePost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push("/main");
      } catch (err) {
        console.log(err);
      }
    },
  },
  // params 속성 값은 다이나믹 라우트 매칭으로 :id 값으로 했을때 저장되는 값,
  async created() {
    try {
      // const editData = {
      //   title: this.title,
      //   contents: this.contents,
      // };
      const id = this.$route.params.id;

      const response = await editedPost(id);
      this.response = response.data;
      console.log(response);
      this.title = response.data.title;
      this.contents = response.data.contents;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.warning {
  color: red;
}
</style>
