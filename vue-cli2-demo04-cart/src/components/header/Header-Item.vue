<template>
    <div :style="styleList" class="header-bar-item">
      <slot name="header-text"></slot>
    </div>
</template>

<script>
export default {
  name: 'Header-Item',
  props: {
    styleList: {
      type: String
    }
  }
}
</script>

<style scoped>
  .header-bar-item {
  }
</style>
