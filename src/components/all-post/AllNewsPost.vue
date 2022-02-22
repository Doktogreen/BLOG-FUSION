
<template>
    <div class="row justify-content-between">
        <a class="btn btn-primary btn-rounded col-12 mb-4" @click="toggleAddPost()" role="button">CREATE Post</a>
        <div v-show="addPost">
            <create-post @create-post="creatPost" :post="post" />
        </div>
        <div class="overflow-y-scroll" style="max-height: 1000px;">
            <news-post @create-post="creatPost" :posts="posts" />
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
    post: Array
  },
  data() {
    return {
        posts: [],
        addPost: false,
        title: "",
        body: ""

    }
},
mounted(){
    axios.get(`https://gorest.co.in/public/v2/users/100/posts`)
            .then((response) => {
                return this.posts = response.data
            })
},
methods: {
    toggleAddPost(){
            this.addPost = !this.addPost
        },
    creatPost(){
        let data = {
            title: this.title,
            body: this.body
        }
        const Headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer`
        }
        axios.post(`https://gorest.co.in/public/v2/users/100/posts`,{Headers}, data)
            .then((response) => {
                console.log(response.data)
                return 
            })
            this.$emit("create-post", data)
    }
}
}




</script>
