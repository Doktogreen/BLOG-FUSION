<template>
    <div class="bg-image hover-overlay ripple w-100" data-ripple-color="light">
        <img src="https://mdbcdn.b-cdn.net/img/Marketing/campaigns/news/websites.webp" class="w-100" alt="Websites You Should Know">
        <a href="https://www.youtube.com/watch?v=hUeMMmlD9NA" target="_blank">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </a>
    </div>
    <div class="p-5">
        <h5>{{post.title}}</h5>
        <p>{{post.body}} </p>
        <a class="btn btn-primary btn-rounded" href="https://www.youtube.com/watch?v=hUeMMmlD9NA" target="_blank" role="button">Learn more</a>
    </div>
</template>

<script>

export default {
    name: "SingleNewsPost",
    components: {

    },
    props: {
        post: Object
    }
}
</script>
