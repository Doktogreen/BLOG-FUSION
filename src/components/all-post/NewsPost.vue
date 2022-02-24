<template>
<div>
    <single-news-post />
</div>
</template>
<script>
import SingleNewsPost from './SingleNewsPost.vue'

export default {
    name: "NewsPost",
    components: {
        SingleNewsPost

    },
    props: {}
}
</script>
