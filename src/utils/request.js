import axios from 'axios'
// import { Loading } from "element-ui";
// import router from '@/router'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'service', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  headers: { ContentType: 'application/json'} // request timeout
})

// let loadingInstance = null
service.interceptors.request.use(
  config => {
  //   loadingInstance = Loading.service({
  //     fullscreen: true,
  //     text: "Loading"
  //   })
    if (config.method === 'post')

    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  /**
   * Determine the request status by custom errcode
   * Here is just an example
   * You can also judge the status by HTTP Status errcode
   */
  response => {
    const res = response.data
    if (res.code !== 0) {
    //   setTimeout(() =>   loadingInstance.close(), 1000)
    } else {
    //   setTimeout(() => loadingInstance.close(), 1000)
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
