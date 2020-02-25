<template>
    <div>
      <button @click="delCount">-</button>
      <sapn>{{ this.count }}</sapn>
      <button @click="addCount">+</button>
    </div>
</template>

<script>
import { pubsub } from 'pubsub.js'
export default {
  name: 'CounterNumber',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    delCount () {
      this.count--
      pubsub.publish('delCount', this.count)
      // this.$emit('Count', this.count)
    },
    addCount () {
      this.count++
      // this.$emit('Count', this.count)
    }
  }
}
</script>

<style scoped>

</style>
