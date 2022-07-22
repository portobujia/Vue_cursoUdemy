<template>
  <section id="content">
    <h2 class="subheader">Blog</h2>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "BlogComponent",
  mounted() {
  },
  methods: {
    getArticles() {
      axios.get("http://localhost:3000/api/allCoches").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
