import {loginByUsername,logout,getUserInfo} from '@/api/login'
import {getToken,removeToken,setToken} from "@/utils/auth"

const user={
    state:{
        name:"",
        roles:[],
        token:getToken(),
        avatar:""
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_NAME:(state,name)=>{
            state.name=name
        },
        SET_ROLES:(state,role)=>{
            state.roles=role
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar=avatar
        }
    },
    actions:{
        LoginByUsername({commit},userInfo){
            const username=userInfo.username.trim();
            return new Promise((resolve,reject)=>{
                loginByUsername(username,userInfo.password).then(res=>{
                    const data=res.data;
                    commit('SET_TOKEN',data.token)
                    setToken(res.data.token)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetUserInfo({commit,state}){
            return new Promise((resolve,reject)=>{
                getUserInfo(state.token).then(res=>{
                    if(!res.data){
                        reject('error')
                    }
                    const data =res.data;
                    if(data.roles&&data.roles.length>0){
                        commit('SET_ROLES',data.roles)
                    }else{
                        reject('getInfo：roles must be a non-null array!')
                    }
                    commit('SET_NAME',data.name);
                    commit('SET_AVATAR',data.avatar);
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        LogOut({commit,state}){
            return new Promise((resolve,reject)=>{
                logout(state.token).then(()=>{
                    commit('SET_TOKEN','');
                    removeToken();
                    resolve()
                })
            })
        },
        FedLogOut({commit},role){
            return new Promise(resolve=>{
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            })
        }
    }
}

export default user