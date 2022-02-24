
<template>
    <div class="row justify-content-between">
        <a class="btn background btn-rounded col-12 mb-4" @click="toggleAddPost()" role="button">CREATE POST</a>
        <div v-show="addPost">
            <create-post  @get-post="getPost" />
        </div>
        <div class="overflow-y-scroll" style="max-height: 1000px;">
            <news-post :posts="posts" />
        </div>
    </div>
</template>

<script>
import CreatePost from './CreatePost.vue';
import NewsPost from './NewsPost.vue';
import axios from 'axios'

export default { 
name: "AllNewsPost",
  components: {
    NewsPost,
    CreatePost
  },
  props: {
      props: Array
  },
  data() {
    return {
        addPost: false,
        posts: []
    }
},
mounted() {
        this.getPost()
},
methods: {
    getPost(){
    const headers = {
        Accept:"application/json",
            ContentType: "application/json",
            Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
    }
    axios.get(`https://gorest.co.in/public/v2/users/100/posts`, {headers})
    .then((response) => {
        return this.posts = response.data
    })
},
    toggleAddPost(){
        this.addPost = !this.addPost
        console.log(this.addPost)
    }
}
}

</script>
