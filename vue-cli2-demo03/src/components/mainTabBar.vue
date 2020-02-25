<template>
  <TabBar>
    <TabBarItem :checkColor="`pink`" :path="`/home`">
      <div slot="item-icon-active">img1-active</div>
      <div slot="item-icon">img1</div>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/category`">
      <div slot="item-icon-active">img2-active</div>
      <div slot="item-icon">img2</div>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/cart`">
      <div slot="item-icon-active">img3-active</div>
      <div slot="item-icon">img3</div>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/profile`">
      <div slot="item-icon-active">img4-active</div>
      <div slot="item-icon">img4</div>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from './tabar/TabBar'
import TabBarItem from './tabar/TabBarItem/TabBarItem'
export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
