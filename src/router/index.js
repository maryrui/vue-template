import Vue from 'vue'
import Router from 'vue-router'
const _import = require ('./_import_'+process.env.NODE_ENV);

Vue.use(Router)

import Layout from "../views/Layout/Layout"

export const constantRouterMap=[
    {path:"/login",component:_import('login/index'),hidden:true},
    {
        path:"",
        component:Layout,
        redirect:"home",
        children:[{
            path:"home",
            component:_import('home/index'),
            name:"home",
            meta:{title:"首页",icon:"example",nocache:true}
        }]
    }
]

export default new Router({
    scrollBehavior:()=>({y:0}),
    routes: constantRouterMap
})


export const asyncRouterMap = [
    {
        path:"/user",
        component:Layout,
        redirect:'/user/index',
        always:true,
        meta:{
            title:"用户管理",
            icon:"dashboard",
            roles:['admin']
        },
        children:[{
            path:"index",
            component:_import('user/index'),
            name:"userList",
            meta:{
                title:'用户列表'
            }
        },
        {
            path:"editor",
            component:_import('user/editor'),
            name:"userEditor",
            meta:{
                title:'編輯'
            }
        },
            {
                path:"table/index",
                component:_import('table/index'),
                name:"table",
                icon:"list",
                meta:{
                    title:'表格列表',
                }
            }
        ]
    }

]

