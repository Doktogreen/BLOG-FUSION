
<template>
  <!--Main layout-->
  <main class="mt-8 mb-5 ">
    <div class="container">
        <div id="intro" style="margin-top: 20px;" class="p-5 text-center bg-light">
      <h1 class="mb-0 h4">How Electricity is Being Derived From Our Ecosystem.</h1>
    </div>
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-12 col-12 mb-4">
          <!--Section: Post data-mdb-->
          <section class="border-bottom mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
              class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

            <div class="row align-items-center mb-4">
              <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-5 shadow-1-strong me-2"
                  height="35" alt="" loading="lazy" />
                <span> Published <u>15.07.2020</u> by</span>
                <a href="" class="text-dark">Anna</a>
              </div>

              <div class="col-lg-6 text-center text-lg-end">
                <button type="button" class="btn btn-primary px-3 me-1" style="background-color: #3b5998;">
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button type="button" class="btn btn-primary px-3 me-1" style="background-color: #55acee;">
                  <i class="fab fa-twitter"></i>
                </button>
                <button type="button" class="btn btn-primary px-3 me-1" style="background-color: #0082ca;">
                  <i class="fab fa-linkedin"></i>
                </button>
                <button type="button" class="btn btn-primary px-3 me-1">
                  <i class="fas fa-comments"></i>
                </button>
              </div>
            </div>
          </section>
          <!--Section: Post data-mdb-->

          <!--Section: Text-->
          <section>
            <div class="p-4 d-flex justify-content-between align-items-center border-bottom">
                <h2 class="mb-5">Content</h2>
            </div>
            <!-- Header -->

            <!-- Screen -->
            <div class="overflow-y-scroll" style="max-height: 500px;">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias
              consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam
              ullam molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Optio sapiente molestias consectetur.
              Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam molestiae
              magni velit laborum itaque minima doloribus eligendi!
            </p>

            <p><strong>Optio sapiente molestias consectetur?</strong></p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut
              tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem
              adipisci totam sit consequuntur eligendi.
            </p>

            <p class="note note-light">
              <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,
              adipisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat
              molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis
              possimus quia incidunt maiores molestias eaque nam commodi! Magnam, labore.
            </p>

            <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="img-fluid shadow-1-strong rounded-5 mb-4"
              alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
              voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
              officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
            </p>
            </div>
          </section>
          
          <!--Section: Share buttons-->
          <section class="text-center border-top border-bottom py-4 mb-4">
            <p><strong>Share with your friends:</strong></p>

            <button type="button" class="btn btn-primary me-1" style="background-color: #3b5998;">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="btn btn-primary me-1" style="background-color: #55acee;">
              <i class="fab fa-twitter"></i>
            </button>
            <button type="button" class="btn btn-primary me-1" style="background-color: #0082ca;">
              <i class="fab fa-linkedin"></i>
            </button>
            <button type="button" class="btn btn-primary me-1">
              <i class="fas fa-comments me-2"></i>Add comment
            </button>
          </section>
          <!--Section: Share buttons-->

          <!--Section: Author-->
          <section class="border-bottom mb-4 pb-4">
            <div class="row">
              <div class="col-3">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                  class="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div class="col-9">
                <p class="mb-2"><strong>Ajibodu Ayomide</strong></p>
                <a href="" class="text-dark"><i class="fab fa-facebook-f me-1"></i></a>
                <a href="" class="text-dark"><i class="fab fa-twitter me-1"></i></a>
                <a href="" class="text-dark"><i class="fab fa-linkedin me-1"></i></a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>
          </section>
          <!--Section: Author-->

          <!--Section: Comments-->
           <p class="text-center"><strong>Total Comments: {{comment.length}}</strong></p>
          <div :key="comment.id" v-for="comment in comment">
          <section class="border-bottom mb-3">
            <p class="text-center"><strong>Comment: {{comment.post_id}}</strong></p>

            <!-- Comment -->
            <div class="row mb-4">
              <div class="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                  class="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div class="col-10">
                <p class="mb-2"><strong>{{comment.name}}</strong></p>
                <p class="mb-2"><strong>{{comment.email}}</strong></p>
                <p>
                  {{comment.body}}
                </p>
              </div>
            </div>
          </section>
        </div>
          <!--Section: Comments-->

          <!--Section: Reply-->
          <section>
            <p class="text-center"><strong>Leave a reply</strong></p>

            <form v-on:submit.prevent="createComment()">
              <!-- Name input -->
              <div class=" mb-4">
                <input v-model="name" type="text" id="form4Example1" placeholder="What's your name" class="form-control" />
              </div>

              <!-- Email input -->
              <div class=" mb-4">
                <input v-model="email" type="email" id="form4Example2" placeholder="Your email" class="form-control" />
              </div>

              <!-- Message input -->
              <div class=" mb-4">
                <textarea v-model="body" class="form-control" placeholder="Type your comment here" id="form4Example3" rows="4"></textarea>
              </div>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label class="form-check-label" for="form4Example4">
                  Send me a copy of this comment
                </label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn background btn-block mb-4">
                <p v-if="isSubmiting">Adding comment...</p><p v-if="!isSubmiting">Comment</p>
              </button>
            </form>
          </section>
          <!--Section: Reply-->
        </div>
      </div>
    </div>
    <hot-news-other-posts/>
  </main>
</template>

<script>
import axios from 'axios';

export default{ 
name: "PostContent",
  components: {},
  props: {},
  data(){
    return{
      isSubmiting: false,
      name: "",
      email: "",
      body: "",
      comment: [],
    }
  },
  methods: {
    createComment(){
      let data = {
        name: this.name,
        email: this.email,
        body: this.body,
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
      axios.post(`https://gorest.co.in/public/v2/posts/100/comments`, data, {headers})
        .then((response) => {
            console.log(response.data)
            return this.comment = [...this.comment, response.data]
        }
    )
    this.getComments();
    },
    getComments(){
      const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
      axios.get(`https://gorest.co.in/public/v2/posts/100/comments`, {headers})
        .then((response) => {
            console.log(response.data)
            return this.comment = response.data;
        }
        
    )
    console.log(this.comment);
    }
  },
  mounted() {
    this.getComments()
  }
};
</script>
