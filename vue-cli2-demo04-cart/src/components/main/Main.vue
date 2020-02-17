<template>
    <div class="main-bar">
      <slot name=""></slot>
    </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
  .main-bar {
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: ghostwhite solid 1px;
    background: #CCC;
  }
</style>
