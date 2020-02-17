<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <TabBarItem :checkColor="`red`" :path="`/home`">
        <div slot="item-icon-active">img1-active</div>
        <div slot="item-icon">img1</div>
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem :checkColor="`red`" :path="`/category`">
        <div slot="item-icon-active">img2-active</div>
        <div slot="item-icon">img2</div>
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem :checkColor="`red`" :path="`/cart`">
        <div slot="item-icon-active">img3-active</div>
        <div slot="item-icon">img3</div>
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem :checkColor="`red`" :path="`/profile`">
        <div slot="item-icon-active">img4-active</div>
        <div slot="item-icon">img4</div>
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabar/TabBar'
import TabBarItem from './components/tabar/TabBarItem/TabBarItem'

// eslint-disable-next-line no-unused-vars
import PubSub from 'pubsub.js'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
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
