
<template>
  <div id="app" >

    <nav v-if="$store.state.user">
      
      <!-- <router-link to="/login">Login</router-link> -->
      <!-- <router-link to="/register">Register</router-link> -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <button @click="$store.dispatch('logout')">logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
 
  import { onBeforeMount } from 'vue';
  import { useStore } from 'vuex'

  export default{
    setup(){
      const store = useStore()
      onBeforeMount(() => {
        store.dispatch('fetchUser')
      })
    }
  }
</script>


<style>
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>