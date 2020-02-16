<template>
    <div>
<!--      <ul>-->
<!--        <li v-for="(item,index) in LinkList" :key="index"  ><router-link :to="`/main/${item.name}`">{{ item.name }}</router-link></li>-->
<!--      </ul>-->
      <ul>
        <li  @click="clickOne(item.name)" v-for="(item,index) in LinkList" :key="index">
          {{ item.name }}
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    LinkList: {
      type: Array,
      require: true,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickOne(name) {
      this.$router.push(`/main/`+ name)
    }
  }
}
</script>

<style scoped>
  .router-link-active {
    color: red;
  }
</style>
