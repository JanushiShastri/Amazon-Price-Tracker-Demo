
<template>
  <div id="app">

    <nav>
      
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App'
  };
</script>


<style>
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>