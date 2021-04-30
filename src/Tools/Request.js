import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] =`Bearer ${localStorage.getItem('access')}`
axios.defaults.baseURL='https://api.travelbazi.com/v1'

const RequestInstance = axios.create()

// RequestInstance.interceptors.request.use(function (config) {
//     return config
//   }, function (error) {
//     return Promise.reject(error)
//   })
// RequestInstance.interceptors.response.use(function (response) {
//     return response
//   }, function (error) {
//     return Promise.reject(error)
//   })

  export default RequestInstance