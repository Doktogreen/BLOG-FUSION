<template>
    <div class="row justify-content-between">
        <div class="overflow-y-scroll" style="max-height: 800px;">
          <hot-news-other-posts />
        </div>
    </div>
</template>
<script>
import HotNewsOtherPosts from './HotNewsOtherPosts.vue';

export default { 
name: "AllHotNewsPost",
  components: {
    HotNewsOtherPosts,
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}




</script>
