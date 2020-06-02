<template>
  <TabBar>
    <TabBarItem :checkColor="`pink`" :path="`/home`">
      <div slot="item-icon-active"><span class="iconfont icon-Homehomepagemenu active"></span></div>
      <div slot="item-icon"><span class="iconfont icon-Homehomepagemenu"></span></div>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/category`">
      <div slot="item-icon-active"><span class="iconfont icon-leimupinleifenleileibie active"></span></div>
      <div slot="item-icon"><span class="iconfont icon-leimupinleifenleileibie"></span></div>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/cart`">
      <div slot="item-icon-active"><span class="iconfont icon-gouwuchekong active"></span></div>
      <div slot="item-icon"><span class="iconfont icon-gouwuchekong"></span></div>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem :checkColor="`pink`" :path="`/profile`">
      <div slot="item-icon-active"><span class="iconfont icon-ren active"></span></div>
      <div slot="item-icon"><span class="iconfont icon-ren"></span></div>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/utils/tabar/TabBar'
import TabBarItem from 'components/utils/tabar/TabBarItem/TabBarItem'
export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  span {
    font-size: 20px;
  }
  .active {
    color: pink;
  }
</style>
