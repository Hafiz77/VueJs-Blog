<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="post-item mb-3 pa-3" v-show="postsDetails !== null">
        <h3 class="headline mb-1 green--text">{{postsDetails.title}}</h3>
        <p class="mb-3">{{postsDetails.body}}</p>
        <p class="text-xs-right">Posted By <span class="more" @click="goToUserdetail(userDetails.id)">{{userDetails.name}}</span></p>
        <h3 class="headline mb-3">Comments</h3>
        <v-card class="post-item mb-3 pa-3" :key="comment.id" v-for="(comment, index) in commentsList">
          <p class="mb-2">
            <strong>{{index+1}}.</strong> {{comment.body}}
          </p> 
          <p class="mb-1 text-xs-right"><strong>Commented By: </strong> 
          <span>{{comment.name}}</span>
          </p> 
          <p class="mb-0 text-xs-right"><strong>Email:</strong>
          <span>{{comment.email}}</span>
          </p> 
        </v-card>
        <p>
          <v-btn class="ml-0" color="primary" @click="goToPosts">
            Back to posts
          </v-btn> 
        </p>
      </v-card> 
      <v-card class="post-item mb-3 pa-3"  v-show="postsDetails === null">
        <h3 class="headline mb-0">Post Not Found</h3>
        <p>
          <v-btn class="ml-0" color="primary" @click="goToPosts">
            Back to posts
          </v-btn> 
        </p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  name: "details",
  data() {
    return {
      api_url : "http://jsonplaceholder.typicode.com/",
      postId: this.$route.params.id,
      page: 1,
      postsDetails: null,
      userDetails: null,
      commentsList: []
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      axios
        .get(this.api_url + "posts/" + this.postId)
        .then(
          response => {
            this.postsDetails = response.data.id ? response.data : null;
            this.getUserDetails(this.postsDetails.userId)
            this.getComments();
          },
          error => {
            this.error = error;
          }
        );
    },
    getComments() {
      axios
        .get(this.api_url + "comments?postId="+ this.postId)
        .then(
          response => {
            this.commentsList = response.data;
          },
          error => {
            this.error = error;
          }
        );
    },
    getUserDetails(userId) {
      axios
        .get(this.api_url + "users/"+ userId)
        .then(
          response => {
            this.userDetails = response.data;
          },
          error => {
            this.error = error;
          }
        );
    },
    goToUserdetail(userId) {
      this.$router.push({ name: "user", params: { id: userId } });
    },
    goToPosts () { 
      this.$router.push({ name: "posts"});
    },
  },
};
</script>

<style scoped>
.post-item {
  text-align: left;
}
</style>
