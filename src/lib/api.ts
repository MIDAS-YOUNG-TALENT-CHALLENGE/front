import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

const getToken = () => {
  return localStorage.getItem('accessToken')
}

api.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${getToken()}`
  
  return config
})

export default api
