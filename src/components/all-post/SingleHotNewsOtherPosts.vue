<template>
    <div class="bg-image hover-overlay ripple w-100" data-ripple-color="light" style="border-bottom: 1px solid hsl(0, 0%, 95%)">
        <img src="https://mdbootstrap.com/api/snippets/static/screenshots/3695376.jpeg" class="img-fluid">
        <a href="/snippets/standard/marta-szymanska/3695376">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
        </a>
    </div>
    <div class="p-4">
        <!-- Media object -->
        <div class="d-flex text-reset">
            <!-- Image -->
            <img src="https://s.gravatar.com/avatar/4cf642822dc5caf650facd79b8f64a95" alt="John Doe" class="me-3 rounded-circle" style="width: 30px; height: 30px">
            <!-- Body -->
            <div class="">
                <a href="/snippets/standard/marta-szymanska/3695376" class="fw-bold mb-1 text-reset d-block">{{post.title}}</a>

                <a class="badge rounded-pill" href="/snippets/?tag=bootstrap-5" target="_blank" style="background-color: hsl(217, 88.8%, 92.8%); color: hsl(217, 88.8%, 30.8%);">
                    Comments
                </a>
            
                <a class="badge rounded-pill" href="/snippets/?tag=mdb-free" target="_blank" style="background-color: hsl(152, 56%, 93%); color: hsl(133, 56%, 20%);">
                    Lean more
                </a>
            </div>
        </div>
        <!-- Media object -->
    </div>
    <div class="p-3 px-4 text-end bg-light">
        <span class="me-2">2542<i class="fas fa-eye ms-1"></i></span>
        <span>12<i class="fas fa-thumbs-up ms-1"></i></span>
    </div>
</template>

<script>

export default {
    name: "SingleHotNewsOtherPosts",
    components: {

    },
    props: {
        post: Object
    }
}
</script>
