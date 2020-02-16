<template>
    <div>
      main组件
    </div>
</template>

<script>
    export default {
        name: "Main",
        data () {
          return {
            state: ''
          }
        },
      watch: {//深度监控
        $route () {
          this.state = this.$route.params.id
          alert("route change")
        },
        state () {
          console.log("state change")
        }
      }
    }
</script>

<style scoped>

</style>
