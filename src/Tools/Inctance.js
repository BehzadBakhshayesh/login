import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.travelbazi.com/v1/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    
    }
  })