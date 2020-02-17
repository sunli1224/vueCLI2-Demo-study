<template>
    <div class="header-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header-bar {
    background: #f6f6f6;
    text-align: center;
  }
</style>
