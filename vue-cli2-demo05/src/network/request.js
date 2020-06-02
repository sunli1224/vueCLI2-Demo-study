import axios from 'axios'
// 方式四
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(param => {
    console.log(param)
    return param
  }, error => {
    console.log(error)
  })
  // 返回拦截
  instance.interceptors.response.use(value => {
    console.log('返回拦截器')
    console.log(value.data)
    return value
  }, error => {
    console.log(error)
  })

  return instance(config)
}
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res.data.data.banner)
// }).catch(err => {
//   console.log(err)
// })

// 方式三
// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
//
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res.data.data.banner)
// }).catch(err => {
//   console.log(err)
// })

// 方式二
// export function request (config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseconfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }
//
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
// 方式1
// export function request (config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   return instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }
//
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res.data.data.banner)
// }, err => {
//   console.log(err)
// })
