<template>
<div :key="post.Id" v-for="post in posts" id="post-481" class="shadow-4 rounded-5 bg-white text-center mb-5 overflow-hidden mb-5 single-post">
    <single-news-post @create-post="creatPost" :post="post" />
</div>
</template>
<script>
import SingleNewsPost from './SingleNewsPost.vue'

export default {
    name: "NewsPost",
    components: {
        SingleNewsPost

    },
    data(){
        return{
            post: []
        }
    },
    methods: {
        createPost(data){
            this.post = [...this.post, data ]
        }
    },
    props: {
        posts: Array
    }
}
</script>
