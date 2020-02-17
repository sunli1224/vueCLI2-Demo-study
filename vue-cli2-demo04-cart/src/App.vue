<template>
  <div id="app">
    <Header>
      <HeaderItem>
        <div class="h3" slot="header-text">我的商品</div>
      </HeaderItem>
    </Header>
    <div class="bar-main">
      <Main v-for="(item,index) in spList" :key="index">
        <MainItem>
          <img style="width: 40px;height: 40px" :src="item.spImg">
        </MainItem>
        <MainItem>
          <div>
            <span>-</span>
            <span>{{item.spNum}}</span>
            <span>+</span>
          </div>
        </MainItem>
        <MainItem>
          <div>
            <button class="btn btn-dark">删除</button>
          </div>
        </MainItem>
      </Main>
    </div>
    <Footer>
      <FooterItem slot="jsSlot">
      </FooterItem>
      <FooterItem slot="jsSlot">
      </FooterItem>
      <FooterItem slot="jsSlot">
        <div >总价：{{this.allMoney | formatData}}</div>
      </FooterItem>
      <FooterItem slot="jsSlot">
        <button @click="computedMoney"  class="btn btn-danger">结算</button>
      </FooterItem>
    </Footer>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import FooterItem from './components/footer/Footer-item'
import HeaderItem from './components/header/Header-Item'
import MainItem from './components/main/Main-Item'
export default {
  name: 'App',
  components: {
    MainItem,
    HeaderItem,
    FooterItem,
    Header,
    Footer,
    Main
  },
  computed: {},
  methods: {
    computedMoney () {
      this.spList.forEach(item => {
        this.allMoney += item.spNum * item.spMoney
      })
    }
  },
  data () {
    return {
      allMoney: 0,
      spList: [
        {
          spImg: require('./assets/logo.png'),
          spName: 'TCL彩电',
          spNum: 1,
          spMoney: 1500
        },
        {
          spImg: require('./assets/logo.png'),
          spName: '机顶盒',
          spNum: 1,
          spMoney: 102
        },
        {
          spImg: require('./assets/logo.png'),
          spName: '海尔冰箱',
          spNum: 1,
          spMoney: 1400
        },
        {
          spImg: require('./assets/logo.png'),
          spName: '小米手机',
          spNum: 1,
          spMoney: 2666
        }
      ]
    }
  },
  filters: {
    formatData (value) {
      return '￥' + value.toFixed(2)
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .bar-main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
