<template>
  <el-carousel height="200px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in banner" :key="item.title">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'HomeBannerItem',
  props: {
    banner: {
      type: Array,
      require: true,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  img {
    height: 200px;
    width: 100%;
  }
</style>
