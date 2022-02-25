import axios from 'axios'
const service = axios.create({
    baseURL: '',
    timeout: 5000
})


service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        return res
    },
    (error) => {
        return Promise.reject('Error')
    }
)

export default {
    post (url, jsonData, urlData, isFormParams) {
        // url: 接口地址;  jsonData： json格式的数据;  urlData： 接口地址拼的参数; isFormParams(true or false): 为true时使用form格式传递参数,默认json格式传递参数
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url: urlData ? (url + '/' + urlData) : url,
                data: jsonData
            }).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    get (url, data) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: data,
            }).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}
