<template>
    <div id="home">
      <nav-bar class="home-bg"><div slot="center">购物街</div></nav-bar>
      <HomeBannerItem :banner="banner"/>
      <RecommendInfo :recommend="recommend"/>
      <AdShow/>
      <tab-control class="scoll-fix" :titles="titles"/>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
</template>

<script>
import NavBar from 'components/utils/navbar/NavBar'
import { getHomeAllData } from 'network/home'
import HomeBannerItem from './homebanneritem/HomeBannerItem'
import RecommendInfo from 'components/content/recommendinfo/RecommendInfo'
import AdShow from 'components/utils/adshow/AdShow'
import TabControl from 'components/content/tabcontrol/TabControl'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeBannerItem,
    RecommendInfo,
    AdShow,
    TabControl
  },
  data () {
    return {
      banner: [],
      recommend: [],
      titles: ['流行','新款','精选']
    }
  },
  created() {
    getHomeAllData().then(res => {
      // console.log(res.data.recommend.list)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-bg {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20;
  }

  img {
    height: 200px;
    width: 100%;
  }
  .scoll-fix {
    position: sticky;
    top: 44px;
  }
</style>
