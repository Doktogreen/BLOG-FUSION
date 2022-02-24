
<template>
  <section class="vh-100" style="">
  <div class="wrapper">
    <div class="logo"> <img src="https://res.cloudinary.com/skiltime/image/upload/v1645686207/wildffff_zy9jvp.jpg" alt=""> </div>
    <div class="text-center mt-4 name"> Fusion Blog </div>
    <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center"> 
          <span class="far fa-user"></span> 
          <input type="text" name="userName" id="userName" placeholder="Username"> 
        </div>
        <div class="form-field d-flex align-items-center"> 
          <span class="fas fa-key"></span> 
          <input type="password" name="password" id="pwd" placeholder="Password"> 
        </div> 
          <a type="button" href="#/" class="btn mt-3">Login</a>
    </form>
    <div class="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#/register">Sign up</a> </div>
</div>
</section>
</template>

<script>

export default {
  name: "Login",
  components: {
  },
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
