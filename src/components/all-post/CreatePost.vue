<template>
    <section>
            <p class="text-center"><strong>Create a Post</strong></p>

            <form @submit="createPost()">
              <!-- Name input -->
              <div class="form-outline mb-4">
                <input v-model="posts.title" type="text" id="form4Example1" class="form-control" />
                <label class="form-label" for="form4Example1">Title</label>
              </div>

              <!-- Message input -->
              <div class="form-outline mb-4">
                <textarea v-model="posts.body" class="form-control" id="form4Example3" rows="4"></textarea>
                <label class="form-label" for="form4Example3">Text</label>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label class="form-check-label" for="form4Example4">
                  Send a copy of this post to a friend
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Publish
              </button>
            </form>
          </section>
</template>

<script>

export default {
    name: "CreatePost",
    components: {

    },
    props: {
      post: Object
    },
    data(){
        return{
            posts: []
        }
    },
    methods: {
        createPost(data){
          this.$emit("create-post");
          this.posts = [...this.posts, data ]
        }
    },
    
}
</script>
