import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { SERVER_BASE_URL } from '../configs'

axios.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        if (config.url) {
            config.url = SERVER_BASE_URL + config.url
        }

        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    CancelToken: axios.CancelToken,
}
