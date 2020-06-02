import { request } from './request'

export function getHomeAllData() {
  return request({
    url: '/home/multidata'
  })
}
