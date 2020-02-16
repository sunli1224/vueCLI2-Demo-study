<template>
  <div id="app">
    <div class="h1">主页面</div>
    <router-link tag="a" to="/Home">Home</router-link>
    <router-link tag="a" to="/moudle">moudle</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
<!--    <Home :LinkList="LinkList"/>-->
<!--    <router-link to="/home">Home</router-link>-->
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      LinkList: [
        {
          name: 'java'
        },
        {
          name: 'python'
        },
        {
          name: 'go'
        }
      ]
    }
  }
}
</script>

<style>
</style>
