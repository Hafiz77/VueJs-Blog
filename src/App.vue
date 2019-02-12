<template>
<v-app>
  <v-toolbar flat fixed>
    <v-spacer></v-spacer>
    <v-toolbar-title>Vue Blog</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <div id="app">
    <router-view/>
  </div>
</v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.more{
  color: blue;
  cursor: pointer;
}
</style>
