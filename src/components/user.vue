<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4>
      <v-card class="post-item post-user-details mb-3 pa-3" v-if="userDetails !== null">
        <p class="mb-2"><label> Name:</label> <span>  {{userDetails.name}} </span></p>
        <p class="mb-2"><label> Username:</label> <span>   {{userDetails.username}}</span></p>
        <p class="mb-2"><label> Email:</label> <span> {{userDetails.email}}</span></p>
        <p class="mb-2"><label> Phone:</label> <span> {{userDetails.phone}}</span></p>
        <p class="mb-2"><label> Website:</label> <span>  <a v-bind:href="userDetails.website"> {{userDetails.website}}</a></span></p>
        <p class="mb-2"><label> Address:</label> 
        <span>
          <strong>Street:</strong> {{userDetails.address.street}} <br>
          <strong>Suite:</strong> {{userDetails.address.suite}} <br>
          <strong>City:</strong> {{userDetails.address.city}} <br>
          <strong>Zipcode:</strong> {{userDetails.address.zipcode}}
        </span>
        </p>

        <p class="mb-3"><label> Company Info:</label> 
        <span><strong>Name:</strong> {{userDetails.company.name}} <br>
        <strong>CatchPhrase:</strong> {{userDetails.company.catchPhrase}} <br>
        <strong>bs:</strong> {{userDetails.company.bs}}
        </span>
        </p>
        <p>
          <v-btn color="primary" @click="goToPosts">
            Back to posts
          </v-btn> 
        </p>
      </v-card>
      <v-card class="post-item mb-3 pa-3" v-if="userDetails === null">
        <h3 class="headline mb-0">User Not Found</h3>
        <p>
          <v-btn color="primary" @click="goToPosts">
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
  name: "user",
  data() {
    return {
        api_url : "http://jsonplaceholder.typicode.com/",
        userId: this.$route.params.id,
        userDetails: null,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      axios
        .get(this.api_url+"users/" + this.userId)
        .then(
          response => {
            this.userDetails = response.data ? response.data: null ;
          },
          error => {
            this.error = error;
          }
        );
    },
    goToPosts () { 
      this.$router.push({ name: "posts"});
    },
  },
};
</script>

<style>
.post-item {
  text-align: left;
}
.post-user-details p span{
  color: #555;
  display: inline-block;
  width: 70%;
}
.post-user-details p label{
  vertical-align: top;
  font-weight: bold;
  display: inline-block;
  width: 20%;
  text-align: right;
  margin-right: 10px;
}
</style>