import request from '@/utils/request'

export function fetch(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/contact/save',
    url: 'http://106.14.73.29:8081/contact/save', // 本地调试
    method: 'post',
    data
  })
}
export function inspection(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/inspection/save',
    url: 'http://106.14.73.29:8081/inspection/save',// 本地调试
    method: 'post',
    data
  })
}
// 数据提交
export function vehicle(data) {
  return request({
    loading: data.loading || true,
    // url: 'http://106.14.72.252/vehicle/save',
    url: 'http://106.14.73.29:8081/vehicle/save',// 本地调试
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
    url: 'http://106.14.73.29:8081/api/describtion/page',// 本地调试
    method: 'post',
    data
  })
}
