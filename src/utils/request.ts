import axios, { AxiosInstance } from "axios"

export const service: AxiosInstance = axios.create({
    baseURL: "/api",
    timeout: 5000
})

service.interceptors.request.use(config => {
    return config
})

service.interceptors.response.use(response => {
    const res = response.data
    return res
})
