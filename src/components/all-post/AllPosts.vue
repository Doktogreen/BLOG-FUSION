<template>
<div class="p-3 row all-post-cover col-12 w-100">
<div class="all-post col-4 mt-5 col-sm-12 mb-5">
    <div v-for="(item, i) in filterItems" :key="i" class="shadow-4 rounded-5 mb-2 post overflow-hidden">
    <div style="margin-right: 20px !important;" class="post-item">
    <div class="bg-image hover-overlay ripple w-100" data-ripple-color="light" style="border-bottom: 1px solid hsl(0, 0%, 95%)">
        <img src="https://mdbootstrap.com/api/snippets/static/screenshots/3695376.jpeg" class="img-fluid">
        <a href="/#post-content">
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
                <a href="#/post-content" class="fw-bold mb-1 text-reset d-block">{{item.title}}</a>

                <a class="badge rounded-pill" href="#/post-content" target="_blank" style="background-color: hsl(217, 88.8%, 92.8%); color: hsl(217, 88.8%, 30.8%);">
                    Comments
                </a>
            
                <a class="badge rounded-pill" href="#/post-content" target="_blank" style="background-color: hsl(152, 56%, 93%); color: hsl(133, 56%, 20%);">
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
    </div>
</div>
</div>
</div>
  <div id="pagination-cover" >
    <prev-next :page="page" :totalPage="totalPage" @change="onPageChange" />
  </div>
</template>

<script>
import PrevNext from "../../helpers/Pagination.vue";
import axios from 'axios'
export default {
  name: "AllPosts",
  components: { PrevNext },
  data() {
    const items = new Array(100).fill(null).map((e, i) => i);
    const perPage = 3;

    return {
      items, //post
      page: 1, //page one
      perPage, //item per page
      totalPage: Math.ceil(items.length / perPage), //totalPage
      count: items.length, //page count
    };
  },
  computed: {
    filterItems() {
      return this.items.filter(
        (item, i) =>
          i >= (this.page - 1) * this.perPage && i < this.page * this.perPage
      );
    },
  },
  methods: {
    onPageChange(page) {
      this.page = page;
      window.history.replaceState(
        { page },
        `Page${page}`,
        `${window.location.origin}/?page=${page}`
      );
    },
  },
  mounted() {
      axios.get(`https://gorest.co.in/public/v2/posts`,)
            .then((response) => {
                return this.items = response.data
            }
        )
  }
};
</script>

<style scoped>
#pagination-cover {
display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
}

ol {
  list-style-position: inside;
  padding: 0;
}
ol li {
  border: solid 1px #efefef;
  padding: 0.3rem;
}
ol li + li {
  border-top: 0;
}
</style>