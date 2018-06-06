import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth'

const service=axios.create({
    baseURL: process.env.BASE_API,
    timeout:5000
})

service.interceptors.request.use(config=>{
    if(store.getters.token){
        config.headers['X-Token']=getToken()
    }
    return config
},error=>{
        console.log(error);
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response=> response,
       /* const res = response.data;
        if (res.code !== 20000) {
            Message({
                message: res.message,
                duration: 5000,
                type: "error"
            })
            if (res.code === 50008 || res.code === 500012 || res.code === 50014) {
                MEssageBox.confirm('您已被登出，可以取消继续留在该页面，或者重新登陆', '确定登出', {
                    confirmButtonText: "重新登陆",
                    cancelButtonText: "取消",
                    type: "info"
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload();
                    })
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }*/
        error => {
            console.log('err' + error);
            Message({
                message: error.message,
                type: "error",
                duration: 5000
            })
            return Promise.reject(error)
        }

)

export default service