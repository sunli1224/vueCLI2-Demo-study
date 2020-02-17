<template>
    <div class="foot-bar">
      <slot name="jsSlot"></slot>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .foot-bar {
    background: linear-gradient(to top,#f3f3f3,#CCC,#f3f3f3);
    height: 60px;
    display: flex;
    justify-content: space-evenly;
  }
</style>
