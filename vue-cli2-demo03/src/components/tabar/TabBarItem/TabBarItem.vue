<template>
    <div @click="judgeActive()" class="tar-bar-item">
      <div  v-if="!isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>
      <div :class="{active: !isActive}">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    judgeActive () {
      this.isActive = !this.isActive
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
  .active {
    color: red;
  }
</style>
