<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <el-menu
            mode="vertical"
            :show-timeout="200"
            :collapse="isCollapse"
            :default-active="$route.path"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409eff"
        >
            <sidebar-item :routes="permission_routers"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import {mapGetters} from 'vuex'
    import SidebarItem from './SidebarItem'
    export default {
        components:{SidebarItem},
        computed:{
            ...mapGetters([
                'permission_routers',
                'sidebar'
            ]),
            isCollapse(){
                return !this.sidebar.opened
            }
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">

</style>