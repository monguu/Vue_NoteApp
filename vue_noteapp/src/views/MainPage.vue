<template>
  <div>
    <h1>Main</h1>
    <ul>
      <li v-for="postItem in postItems" :key="postItem._id">
        {{ postItem.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getPost } from "@/api/index.js";
export default {
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async getNotes() {
      const { data } = await getPost();
      console.log(data);
      this.postItems = data.posts;
    },
  },
  created() {
    this.getNotes();
  },
};
</script>

<style></style>
