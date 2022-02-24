<template>
<div :key="post.Id" v-for="post in posts" id="post-481" class="shadow-4 rounded-5 bg-white text-center mb-5 overflow-hidden mb-5 single-post">
    <div class="bg-image hover-overlay ripple w-100" data-ripple-color="light">
        <img src="https://mdbcdn.b-cdn.net/img/Marketing/campaigns/news/websites.webp" class="w-100" alt="Websites You Should Know">
        <a href="#/post-content" target="_blank">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </a>
    </div>
    <div class="p-5">
        <h5>{{post.title}}</h5>
        <p>{{post.body}} </p>
        <a class="btn btn-primary btn-rounded" href="#/post-content" role="button">Learn more</a>
    </div>
</div>
</template>
<script>
export default {
    name: "SingleNewsPost",
    components: {

    },
    data(){
        return{
        }
    },
    props: {
        posts: Object
    },
    
}
</script>
