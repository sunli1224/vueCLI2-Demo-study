<template>
  <div id="app">
    <Test/>
    <demo/>
    <h3>{{ $store.getters.getCount }}</h3>
    <br>
    <div>
      {{ $store.getters.getStuList }}
      <br/>
      {{ $store.getters.getStuListLength }}
    </div>
    <div>
      {{ $store.getters.get15StuList }}
    </div>
    <div>
      {{ $store.getters.getStuListByUser(25) }}
    </div>
  </div>
</template>

<script>
import demo from './components/demo'
import Test from './components/Test'
// import PubSub from 'pubsub-js'
export default {
  name: 'App',
  components: {
    Test,
    demo
  },
  mounted () {
    // PubSub.subscribe('delCount', (msg, data) => {
    //   this.count = data
    // })
    // PubSub.subscribe('addCount', (msg, data) => {
    //   this.count = data
    // })
  }
}
</script>

<style>
</style>
