<template>
    <div class="row justify-content-between">
        <div class="overflow-y-scroll" style="max-height: 800px;">
        <hot-news-other-posts :posts="posts" />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HotNewsOtherPosts from './HotNewsOtherPosts.vue';

export default { 
name: "AllHotNewsPost",
  components: {
    HotNewsOtherPosts,
  },
  props: {
    post: Array
  },
  mounted() {
        axios.get(`https://gorest.co.in/public/v2/posts`)
            .then((response) => {
                this.posts = response.data
            })
    },
  data() {
    return {
        posts : [],


    }
},

}




</script>
