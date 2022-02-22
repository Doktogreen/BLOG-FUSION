<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a style="width: 100px;" className='' href="#/">
            <img style="width: inherit;" src="../assets/logowildfussion.png" />
        </a>
        <button @click="openSideBar()" class="navbar-toggler" type="button"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div v-if="sideBarOpen">
        <side-bar :openSideBars="openSideBar" />
        </div>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#/">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#/">Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/profile" rel="nofollow"
                >Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/allposts" >Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/todo" >Todos</a>
            </li>
          </ul>

          <ul class="navbar-nav d-flex flex-row">
            <!-- Icons -->
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#/register">Logout</a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://www.facebook.com/iamfembi" rel="nofollow" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://twitter.com/iamfembi" rel="nofollow" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://github.com/Doktogreen" rel="nofollow" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
    name: "NavBar",
    components: {
        SideBar

    },
    data(){
      return{
        sideBarOpen: false
      }
    },
    methods: {
      openSideBar(){
        this.sideBarOpen = !this.sideBarOpen;
      }
    },
    props: {
      openSideBars: Boolean
  },
}
</script>
