import http from './request'
export function isObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
let filterParams = (obj) => {
    if (isObject(obj)) {
        let params = {}
        Object.keys(obj).forEach(item => {
            if (typeof obj[item] == 'number' || obj[item]) {
                params[item] = obj[item]
            }
        })
        return params
    }
    return {}
}
const post = (url, jsonData, urlData, isFormParams) => {
    return http.post(
        url,
        filterParams(jsonData),
        urlData,
        isFormParams
    )
}
const get = (url, data, type = 1) => { // type == 1 默认地址拼接？  type == 2 地址直接拼接data
    let curUrl = type == 2 ? url + data : url
    let curData = type == 2 ? '' : data

    return http.get(
        curUrl,
        curData
    )
}
export {
    post,
    get
}
