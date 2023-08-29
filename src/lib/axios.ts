import axios from 'axios'
import { env } from '../env'

export const axiosInstance = axios.create({
  baseURL: env.BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
