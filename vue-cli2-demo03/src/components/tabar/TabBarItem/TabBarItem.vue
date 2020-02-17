<template>
    <div @click="rouerLink" class="tar-bar-item">
      <div  v-if="!isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>
      <div :style="{color: judge}">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import PubSub from 'pubsub.js'
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      require: true,
      default: '/home'
    },
    checkColor: {
      type: String,
      require: true,
      default: 'red'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    judge () {
      return this.$route.path.indexOf(this.path) !== -1 ? this.checkColor : ''
    }
  },
  methods: {
    rouerLink () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>
