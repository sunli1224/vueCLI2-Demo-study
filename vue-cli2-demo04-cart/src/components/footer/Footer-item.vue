<template>
    <div :style="styleList" class="footer-item">
      <slot name="jsSlot"></slot>
    </div>
</template>

<script>
export default {
  name: 'Footer-item',
  props: {
    styleList: {
      type: String
    }
  }
}
</script>

<style scoped>
  .footer-item {
    flex: 1;
    flex-direction: row;
    line-height: 3em;
    color: #555;
    text-align: center;
  }
</style>
