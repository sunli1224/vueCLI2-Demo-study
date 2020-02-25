<template>
  <div id="app">
    <counter-number/>
    <h2>{{count}}</h2>
  </div>
</template>
<script>
import { CounterNumber } from './components/CounterNumber.vue'
import { pubsub } from 'pubsub.js'
export default {
  components: {
    CounterNumber
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    Count (val) {
      this.count = val
    }
  },
  mounted () {
    pubsub.subscribe('delCount', (msg, data) => {
      console.log(data)
    })
  }
}
</script>
<style>
</style>
