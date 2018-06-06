<template>
    <div class="login-container">
        <div class="login-form">
            <div>
                <h2>艾特优商家管理后台</h2>
            </div>
            <el-form :rules="loginRule" :model="login" ref="login">
                <el-form-item  prop="username">
                    <el-input v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input v-model="login.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;" :loading="loading" @click="submitLogin('login')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                loading:false,
                login:{
                    username:"",
                    password:""
                },
                loginRule:{
                    username:[{required:true,trigger:'blur',message:"账号是必填项，请输入账号"}],
                    password:[{required:true,trigger:'blur',message:"账号是必填项，请输入密码"}]
                }
            }
        },
        methods:{
            submitLogin(fromName){
                this.$refs[fromName].validate((valid)=>{
                    if(valid){
                        this.loading=true;
                        this.$store.dispatch('LoginByUsername',this.login).then(()=>{
                            this.loading=false;
                            console.log(123132);
                            this.$router.push('/')
                        }).catch(()=>{
                            this.loading=false;
                        })
                    }
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    $bg:#2d3a4b;
    .login-container{
        position:fixed;
        width:100%;
        height:100%;
        background:$bg;
        .login-form{
            width:25%;
            text-align:center;
            color:#fff;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            .el-input{

                input{
                    height:45px;
                    color:#fff;
                    background:transparent;
                    border:1px solid rgba(255,255,255,.1)
                }
            }
        }
        .el-form-item__content{
            margin-top:15px;
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    .login-container h2{
        margin-bottom:40px;
    }

</style>