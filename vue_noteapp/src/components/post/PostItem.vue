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
          {{ postItem.createdAt }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
