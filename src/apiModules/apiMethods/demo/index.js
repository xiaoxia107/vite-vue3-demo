import * as basicAxios from '@/apiModules/request/basicAxios'
import API from '@/apiModules/request/API/index'

const logUpload = data => basicAxios.get(API.logUpload, data) // 日志-上传接口

export {
    logUpload
}
