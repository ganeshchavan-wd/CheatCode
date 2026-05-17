import axios from 'axios'

const API = axios.create({
  baseURL: 'https://cheatcode-backend.onrender.com/api'
})

export default API
