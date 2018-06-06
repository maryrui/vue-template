import Mock from 'mockjs'
import articleAPI from './article'
import loginAPI from './login'

Mock.mock(/\/login\/login/,'post',loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/,'post',loginAPI.logout)
Mock.mock(/\/user\/info\.*/,'get',loginAPI.getUserInfo)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)


export default Mock