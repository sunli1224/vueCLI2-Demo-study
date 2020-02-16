<template>
    <div>
      <div class="h3">news 页面</div>
    </div>
</template>

<script>
export default {
  name: "News",
  beforeRouteUpdate(to,from,next) {
    console.log("更新前的 守卫")
    next()
  },
  beforeRouteLeave(to,from,next) {
    console.log("离开时 组件守卫")
    next()
  }
}
</script>

<style scoped>

</style>
