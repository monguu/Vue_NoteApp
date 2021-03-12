<template>
  <div>
    <ul>
      <li>
        <div class="post_title">
          {{ postItem.title }}
        </div>
        <div class="post_contents">
          {{ postItem.contents }}
        </div>
        <div class="post_time">
          {{ postItem.createdAt | formatDate }}
          <i class="fas fa-plus" v-on:click="Plusbtn"></i>
          <i class="fas fa-trash" v-on:click="deletebtn"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { deletePost } from "@/api/post.js";
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  // filters: {
  //   formatDate(value) {
  //     return new Date(value);
  //   },
  // },
  methods: {
    Plusbtn() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
    async deletebtn() {
      if (confirm(`${this.postItem.title}을 삭제하시겠습니까?`)) {
        const response = await deletePost(this.postItem._id);
        console.log(response);
        this.$emit("deleteText");
      } else {
        console.log("confirm err");
      }
    },
  },
};
</script>

<style></style>
