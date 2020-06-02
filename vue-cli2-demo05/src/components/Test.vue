<template>
    <div>
      <h1>{{ $store.getters.getMsg }}</h1>
      <h2>主节点上的上的getters</h2>
      <h1>{{ $store.getters.getMixMsg }}</h1>
      <button @click="getData">网络请求get</button>
      <button @click="getPageData">网络请求post</button>
      <button @click="getSomeRequest">并发执行多个网络请求</button>
    </div>
</template>

<script>
import {request} from '../network/request'

export default {
  name: 'Test',
  methods: {
    getData () {
      // request({
      //   url: '/home/multidata'
      // }).then(res => {
      //   console.log(res.data.data.banner)
      // }).catch(err => {
      //   console.log(err)
      // })
      // request({
      //   url: '/home/multidata'
      // }, res => {
      //   console.log(res.data.data.banner)
      // }, err => {
      //   console.log(err)
      // })
      // request({
      //   baseconfig: {
      //     url: '/home/multidata'
      //   },
      //   success: function (res) {
      //     console.log(res.data.data.banner)
      //   },
      //   failure: function (err) {
      //     console.log(err)
      //   }
      // })

      request({
        url: '/home/multidata'
      }).then(res => {
        console.log(res.data.data.banner)
      }).catch(err => {
        console.log(err)
      })

      // this.$ajax.get('/home/multidata').then(res => {
      //   console.log(res.data.data.banner)
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    getPageData () {
      this.$ajax.post({
        url: '/home/data?type=sell&page=1'
      }).catch(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getSomeRequest () {
      let url = '/home/multidata'
      // this.$ajax.all([this.$ajax.get(url),
      //   this.$ajax.get(url)]).then(res => {
      //   // 得到两个请求结果，axios会把两个结果封装在一个数组内。
      //   console.log(res[0])
      //   console.log(res[1])
      // }).catch(err => {
      //   console.log(err)
      // })

      // 并发处理，使用axios的spread方法将并发结果自动分开处理
      this.$ajax.all([this.$ajax.get(url),
        this.$ajax.get(url)]).then(this.$ajax.spread((res1, res2) => {
        console.log(res1)
        console.log(res2)
      })).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
