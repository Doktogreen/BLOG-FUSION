
<template>
  <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
                <p class="text-center h5 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form @submit="createUser()" class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input v-model="name" type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input v-model="email" type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <select v-model="gender" type="text" id="form3Example4c" class="form-control">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <label class="form-label" for="form3Example4c">Your Gender</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />
                    <div class="d-felx flex-direction-column">
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                    <br  />
                    <label class="form-check-label" for="form2Example3">
                      Already have an account? <a href="#/login">Login here</a>
                    </label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <a href="#/login">
                    <button type="submit" class="btn btn-primary btn-lg ">Register</button>
                    </a>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <div>
                <p class="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome</p>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Register",
  components: {
  },
  data(){
    return{
      name: "",
      email:"",
      gender: "",
      user: []
    }
  },
  props: {
    // msg: String,
  },
  methods: {
      creatUser(){
        let data = {
            name: this.name,
            email: this.email,
            gender: this.gender
        }
        const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer ACCESS-TOKEN"
        }
        axios.post(`https://gorest.co.in/public/v2/users`, {headers}, data)
            .then((response) => {
                console.log(response.data)
                return this.user = [...this.user, response.data]
            })
            this.$emit(data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
