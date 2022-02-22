<template>
<div :key="post.Id" v-for="post of posts" class="shadow-4 bg-white rounded-5 mb-5 overflow-hidden">
    <single-hot-news-other-posts :post="post" />
</div>
</template>
<script>
import SingleHotNewsOtherPosts from './SingleHotNewsOtherPosts.vue'

export default {
    name: "HotNewsOtherPosts",
    components: {
        SingleHotNewsOtherPosts

    },
    props: {
        posts: Array
    }
}
</script>
