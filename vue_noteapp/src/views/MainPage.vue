<template>
  <div>
    <h1>Main</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <ul v-else>
      <post-item
        v-for="postItem in postItems"
        :key="postItem._id"
        v-bind:postItem="postItem"
      ></post-item>
    </ul>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/common/Spinner.vue";
import PostItem from "@/components/post/PostItem.vue";
import { getPost } from "@/api/index.js";
export default {
  components: {
    PostItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async getNotes() {
      this.isLoading = true;
      const { data } = await getPost();
      console.log(data);
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.getNotes();
  },
};
</script>

<style></style>
