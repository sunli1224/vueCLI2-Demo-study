<template>
    <div @click="judgeActive()" class="tar-bar-item">
      <div  v-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>
      <div :style="defaultStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
    }
  },
  props: {
    path: {
      type: String,
      require: true,
      default () {
        return '/home'
      }
    },
    checkColor: {
      type: String,
      require: true,
      default () {
        return 'red'
      }
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    defaultStyle () {
      return this.isActive ? {color: this.checkColor} : {}
    }
  },
  methods: {
    judgeActive () {
      this.$router.push(this.path)
      // this.isActive = !this.isActive
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
