<template>
    <section>
            <p class="text-center"><strong>Create a Post</strong></p>

            <form @submit="createPost()">
              <!-- Name input -->
              <div class="form-outline mb-4">
                <input v-model="title" type="text" id="form4Example1" class="form-control" />
                <label class="form-label" for="form4Example1">Title</label>
              </div>

              <!-- Message input -->
              <div class="form-outline mb-4">
                <textarea v-model="body" class="form-control" id="form4Example3" rows="4"></textarea>
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
import axios from 'axios'
export default {
    name: "CreatePost",
    components: {

    },
    props: {
    },
    data(){
        return{
          title: "",
          body: "",
          posts: []
        }
    },
    methods: {
        createPost(){
        let data = {
            title: this.title,
            body: this.body
        }
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer 2c7c9f912de64d2f20d5f32900d25741f369f06a4f0b7b33657f46f9b928e792`
        }
        axios.post(`https://gorest.co.in/public/v2/users/100/posts`, data, {headers})
            .then((response) => {
                console.log(response.data)
                return this.posts = [...this.posts, response.data]
            })
            this.$emit("get-post")
    }
    },
    
}
</script>
