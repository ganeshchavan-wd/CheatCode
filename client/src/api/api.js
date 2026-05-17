import axios from 'axios'

const API = axios.create({
  baseURL: 'https://cheatcode-sy50.onrender.com/api'
})

export default API