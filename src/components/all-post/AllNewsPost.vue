
<template>
    <div class="row justify-content-between">
        <a class="btn btn-primary btn-rounded col-12 mb-4" @click="toggleAddPost()" role="button">CREATE Post</a>
        <div v-show="addPost">
            <create-post @get-post="getPost" />
        </div>
        <div class="overflow-y-scroll" style="max-height: 1000px;">
            <news-post />
        </div>
    </div>
</template>

<script>
import CreatePost from './CreatePost.vue';
import NewsPost from './NewsPost.vue';

export default { 
name: "AllNewsPost",
  components: {
    NewsPost,
    CreatePost
  },
  props: {
  },
  data() {
    return {
        addPost: false,
    }
},
methods: {
    toggleAddPost(){
        this.addPost = !this.addPost
    }
}
}

</script>
