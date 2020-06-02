<template>
    <div id="recommendInfo">
      <div v-for="item in recommend" :key="item.sort" class="recommenditems">
          <img :src="item.image">
          <div>{{ item.title }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "RecommendInfo",
  props: {
    recommend: {
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
  #recommendInfo {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    padding: 15px 0 20px;
    border-bottom: 20px solid #e7eaed;
  }
  .recommenditems {
    flex: 1;
  }
  #recommendInfo img {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
  }
</style>
