<template>
    <div>
      <button @click="delCount">-</button>
      <span>{{ $store.getters.getCount }}</span>
      <button @click="addCount">+</button>
      <h2>------------vuex响应式演示-----------</h2>
      <div>
        <h3>{{ $store.getters.getStuObject }}</h3>
        <button @click="addState">添加内容</button>
      </div>
    </div>
</template>

<script>
// import PubSub from 'pubsub-js'
export default {
  name: 'demo',
  methods: {
    delCount () {
      this.$store.dispatch('delCountAction') // 分发给vuex的actions里的不同方法
      // this.count--
      // PubSub.publish('delCount', this.count)
    },
    addCount () {
      this.$store.dispatch('addCountAction')
      // this.count++
      // PubSub.publish('addCount', this.count)
    },
    addState () {
      this.$store.dispatch('addStateAction', {sex: '男'}).then((val) => {
        console.log(val)
      })
    }
  }
}
</script>

<style scoped>

</style>
