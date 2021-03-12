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
//한개 게시물 조회 key 값을 보내기 때문에  get api를 사용,
function editedPost(editPost) {
  return basePostInstance.get(editPost);
}

function editSavePost(id, Data) {
  return basePostInstance.put(id, Data);
}

export { getPost, createPost, deletePost, editedPost, editSavePost };
