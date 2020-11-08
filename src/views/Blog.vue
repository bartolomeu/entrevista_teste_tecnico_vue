<template>
  <div class="about">
    <div class="row">
      <div class="col-6 bg-primary title">
        <h1 class="text-light">Blog</h1>
      </div>
    </div>
    <div class="row">
      <Post v-for="post in posts" :key="post.id"
        :title="post.title"
        :text="post.body"
        img="https://picsum.photos/650"/>

    </div>
  </div>
</template>
<script>
import Post from "@/components/Post.vue";
import PostService from "@/service/PostService";

export default {
  name: "Blog",
  components: {
    Post
  },
  data(){
    return {posts:[]}
  },
  created(){
    PostService.getAll()
    .then(req => req.json())
    .then(res => this.posts= res)
    .catch(e=> console.log(e))
  }
};
</script>
<style scoped>
.title::after{
  content: '';
  width: inherit;
  height: 3.5rem;
  background-color: inherit;
  position: absolute;
  left: -50%;
  top: 0;
  z-index: -1;
}
</style>