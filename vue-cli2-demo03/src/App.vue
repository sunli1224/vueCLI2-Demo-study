<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from 'components/mainTabBar'
export default {
  name: 'App',
  components: {
    mainTabBar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
