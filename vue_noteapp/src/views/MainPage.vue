<template>
  <div>
    <h1>Main</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <ul v-else>
      <post-item
        v-for="postItem in postItems"
        :key="postItem._id"
        v-bind:postItem="postItem"
        v-on:deleteText="getNotes"
      ></post-item>
    </ul>
    <div>
      <router-link to="/add" class="add_button">
        <i class="ion-md-add"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/common/Spinner.vue";
import PostItem from "@/components/post/PostItem.vue";
import { getPost } from "@/api/post.js";
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

<style scoped>
ion-icon {
  font-size: 20px;
}
.add_button {
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid rgb(13, 236, 188);
}
</style>
