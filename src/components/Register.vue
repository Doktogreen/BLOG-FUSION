
<template>
  <!-- <section class="vh-100" style="background-color: #eee;"> -->
  <div class="wrapper">
    <div class="logo"> <img src="https://res.cloudinary.com/skiltime/image/upload/v1645686207/wildffff_zy9jvp.jpg" alt=""> </div>
    <div class="text-center mt-4 name"> Fusion Blog </div>
    <form v-on:submit.prevent="createUser()" class="p-3 mt-3">
        <div class="form-field d-flex align-items-center"> 
          <span class="far fa-user"></span> 
          <input v-model="name" type="text" name="name" id="Name" placeholder="Name"> 
        </div>
        <div class="form-field d-flex align-items-center"> 
          <span class="far fa-user"></span> 
          <input v-model="email" type="text" name="email" id="Email" placeholder="Email"> 
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>   
          <select v-model="gender" type="text" name="gender" id="pwd"> 
            <option class="active">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div> 
        <div class="form-field d-flex align-items-center"> 
          <span class="fas fa-key"></span>
          <input  type="password" name="password" id="pwd" placeholder="Password"> 
        </div>
        <button type="submit" class="btn mt-3">Sign up</button>
    </form>
    <div class="text-center fs-6"> <a href="#">Have an account?</a> Just <a href="#/login">Login</a> </div>
</div>
<!-- </section> -->
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
      createUser(){
        let data = {
            name: this.name,
            email: this.email,
            gender: this.gender
        }
        const headers = {
            Accept:"application/json",
             ContentType: "application/json",
             Authorization: "Bearer 68f97e578f94be80281510d3192602b6387e9faef957d2258a945ce0041be4dd"
        }
        axios.post(`https://gorest.co.in/public/v2/users`, {headers}, data)
            .then((response) => {
                console.log(response.data)
                return this.user = [...this.user, response.data]
            })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
