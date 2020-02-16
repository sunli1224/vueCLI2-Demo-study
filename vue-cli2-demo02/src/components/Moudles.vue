<template>
    <div>
      <ul>
        <li><router-link tag="a" to="/moudle/news">News</router-link></li>
        <li><router-link tag="a" to="/moudle/msg">Messges</router-link></li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Moudles"
    }
</script>

<style scoped>

</style>
