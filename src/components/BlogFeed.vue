<template>
    <main style="margin-top: 58px" class="mx-0 mx-lg-4">
        <div class="container pt-5">
            
            
            <div class="row gx-lg-5">
                <div class="col-lg-8 mb-4 mb-md-0">
                    <!-- Section: News -->
                    <section>
                        <!-- Main heading -->
                        <div class="shadow-4 p-4 rounded-5 bg-white text-center mb-5">
                            <h1 class="h4 mb-0 fw-bold">News</h1>
                        </div>
                        <div id="news-posts">
                            <all-news-post />
                        </div>
                    </section>
                    <!-- Section: News -->
                </div>
                <div class="col-lg-4 mb-4 mb-md-0">
                   <!-- Section: Content -->
                    <section>
                    <div id="gtm-content-others" class="position-relative" style="min-height:175px;margin-bottom: 1rem;">
                        <a class="btn background btn-rounded col-12 mb-4" @click="toggleAddTodo()" role="button">CREATE TODO</a>
                        <div v-show="addTodo">
                                <create-todo-list />
                            </div> 
                        <a id="free2-cli-quick-start" target="_blank" href="https://youtu.be/pjjrk-W7cq4&amp;list=PLl1gkwYU90QkeAAHno3iVJokh2evwMwaX&amp;index=2" class="text-body">
                        
                        <div style="height:176px; border: 1px solid #336799 !important;" class="alert px-3 alert-light shadow-3 border overflow-hidden d-flex align-items-center ripple" role="alert" 
                                data-mdb-color="light">
                            
                            <div> 
                                <p class="my-3 text-danger"><strong>
                                    <i class="fab fa-youtube fa-lg me-2 d-none d-xxl-inline-block"></i>Quick Start</strong> </p>
                                <p>Learn why wild fusion is the best, &amp; <strong>discover the potential of Tech</strong>.</p>
                                <p>From zero to Hero - <strong>watch now</strong>.</p>
                            </div>
                        </div>
                    </a>
            </div>
            <!-- Section: Top snippets -->
            <section class="">
                <!-- Heading -->
                <div class="shadow-4 p-4 rounded-5 bg-white mb-4">
                    <a href="..." class="text-reset">
                        <h5 class="mb-0 fw-bold">
                            <i class="fas fa-fire-alt me-3 text-warning"></i>Hot News From Others
                        </h5>
                    </a>
                </div> 
                              
                <all-hot-news-post />
                <a class="btn background w-100 btn-rounded" href="#/allposts" role="button">See All Other Posts</a>
            </section>
        </section>
    </div>
</div>
</div>
</main>
</template>

<script>
import AllHotNewsPost from './all-post/AllHotNewsPost.vue';
import AllNewsPost from './all-post/AllNewsPost.vue';
import CreateTodoList from './all-todos/CreateTodoList.vue';
export default {
    name: "BlogFeed",
    components: {
        AllNewsPost,
        AllHotNewsPost,
        CreateTodoList,
    },
    props: {},
    data(){
        return{
            addTodo: false
        }
    },
    methods: {
        
        toggleAddTodo(){
            this.addTodo = !this.addTodo
        }
    }
}
</script>