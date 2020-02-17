<template>
    <div class="main-bar-item">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Main-Item'
}
</script>

<style scoped>
  .main-bar-item {
    flex: 1;
    text-align: center;
    line-height: 3em;
  }
</style>
