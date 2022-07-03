import request from '@/utils/request'

export function fetch(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/contact/save',
    url: 'http://192.168.2.3/contact/save', // 本地调试
    method: 'post',
    data
  })
}
export function inspection(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/inspection/save',
    url: 'http://192.168.2.3/inspection/save',// 本地调试
    method: 'post',
    data
  })
}
// 数据提交
export function vehicle(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/vehicle/save',
    url: 'http://192.168.2.3/vehicle/save',// 本地调试
    // target: 'http://192.168.2.3', // 请求地址
    method: 'post',
    data
  })
}
// 页面数据请求
export function describtion(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/api/describtion/page',
    url: 'http://192.168.2.3/api/describtion/page',// 本地调试
    method: 'post',
    data
  })
}
