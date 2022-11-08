// 1.对于数据请求的封装
// import axios from 'axios'

// function httpNowplaying () {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7093899',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1638148513261146896498689","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.list'
//     }
//   })
// }

// function httpDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=2292727`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1638148513261146896498689","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }

// export default {
//   httpNowplaying,
//   httpDetail
// }

// 2.对于数据请求的封装

import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  headers: {
    'X-Client-Info':
    '{"a":"3000","ch":"1002","v":"5.0.4","e":"1638148513261146896498689","bc":"110100"}'
  }
})

// 在发请求之前拦截 -- showLoading
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 在发送请求之前做些什么
  // console.log(config)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 在成功后拦截 -- hideLoading
http.interceptors.response.use(function (response) {
  // 在2xx范围内的任何状态代码都会触发此功能
  // 处理响应数据

  // 隐藏  Toast.loading (手动清除 Toast)
  Toast.clear()

  return {
    ...response,
    aaa: 'dashi'
  }
}, function (error) {
  // 任何超出2xx范围的状态代码都会触发此功能
  // 处理响应错误
  Toast.clear()
  return Promise.reject(error)
})
export default http
