<template>
    <div class="container-fluid">
      <div class="row">
        xxxx
        <header/>
      </div>
      <div class="row">
        <div class="col-md-3">
          <ul>
            <li>
              <router-link to="/about">about</router-link>
            </li>
            <li>
              <router-link to="/study">study</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <router-view ref="about"></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'App',
  comments: {
    header
  }
}
</script>

<style scoped>

</style>
