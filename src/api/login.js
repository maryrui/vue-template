import request from '@/utils/request'

export function loginByUsername(username,password){
    console.log(username);
    const data={
        username,
        password
    }
    return request({
        url:"/login/login",
        method:'post',
        data
    })
}

export  function logout(){
    return request({
        url:"/login/login",
        method:"post"
    })
}

export function getUserInfo(token){
    return request({
        url:"/user/info",
        method:'get',
        params:{token}
    })
}