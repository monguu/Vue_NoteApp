// 게시판 생성 api
import { basePostInstance } from "./index.js";

function getPost() {
  return basePostInstance.get("/");
}
// 게시물 생성
function createPost(addPostData) {
  return basePostInstance.post("/", addPostData);
}
function deletePost(deletePostData) {
  return basePostInstance.delete(deletePostData);
}

export { getPost, createPost, deletePost };
