<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="post-item mb-3 pa-3" :key="post.id" v-for="post in paginatedPostList">
        <h3 class="headline mb-0 more" @click="goTodetail(post.id)">{{post.title}}</h3>
        <p class="mb-0">
          {{post.body | truncate(100,'...')}}
          <span class="more" @click="goTodetail(post.id)">View Details</span>
        </p>
      </v-card>
      <div class="text-xs-center mb-5">
        <v-pagination
          v-model="currentPage"
          :length="pages"
          @input="next"
          prev-icon="<"
          next-icon=">"
        ></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import "vue-material-design-icons/styles.css";
import axios from "axios";
export default {
  name: "posts",
  data() {
    return {
      api_url : "http://jsonplaceholder.typicode.com/",
      postsList: [],
      paginatedPostList: [],
      error: null,
      currentPage: 1,
      itemsPerPage: 20
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchPosts();
  },
  computed: {
    pages() {
      return Math.ceil(this.postsList.length / this.itemsPerPage);
    }
  },
  methods: {
    fetchPosts() {
      axios.get(this.api_url+"posts").then(
        response => {
          this.postsList = response.data;
          let index = this.currentPage * this.itemsPerPage;
          this.paginatedPostList = this.postsList.slice(
            index,
            index + this.itemsPerPage
          );
        },
        error => {
          this.error = error;
        }
      );
    },

    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { id: proId } });
    },

    next(pageNumber) {
      let index = 0;
      this.currentPage = pageNumber;
      index = (this.currentPage-1) * this.itemsPerPage;
      this.paginatedPostList = this.postsList.slice(
        index,
        index + this.itemsPerPage
      );
    }
  },
  filters: {
    truncate(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style>
  .post-item {
    text-align: left;
  }
</style>
