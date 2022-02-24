<template>
    <section>
            <p class="text-center"><strong>Create a Post</strong></p>

            <form v-on:submit.prevent="createPost()">
              <!-- Name input -->
              <div class=" mb-4">
                <input v-model="title" type="text" placeholder="Post title" id="form4Example1" class="form-control" />
              </div>

              <!-- Message input -->
              <div class=" mb-4">
                <textarea v-model="body" placeholder="Type your post content here" class="form-control" id="form4Example3" rows="4"></textarea>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label class="form-check-label" for="form4Example4">
                  Send a copy of this post to a friend
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn row d-flex background btn-block mb-4">
                <p v-if="isSubmiting">Please wait...</p><p v-if="!isSubmiting">Publish</p>
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
    mounted(){
      
    },
    data(){
        return{
          isSubmiting: false,
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
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        this.isSubmiting = true;
        setTimeout(() => {
          this.isSubmiting= false;
      }, 3000);
        axios.post(`https://gorest.co.in/public/v2/users/100/posts`, data, {headers})
            .then((response) => {
                console.log(response.data)
                return this.todos = [...this.todos, response.data]
            })
            this.$emit("get-post")
    }
    },
    
}
</script>
