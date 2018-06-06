<template>
    <div class="app-wrapper" :class="classObj">
        <div v-if="device=='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <tag-view></tag-view>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import {Sidebar,AppMain,TagView,Navbar} from './components'
    import ResizeMixin from './mixin'
    export default {
        name: "Layout",
        components:{
            Navbar,
            Sidebar,
            AppMain,
            TagView
        },
        mixins:[ResizeMixin],
        computed:{
            sidebar(){
                return this.$store.state.app.sidebar
            },
            device(){
                return this.$store.state.app.device
            },
            classObj(){
                return {
                    hideSidebar:!this.sidebar.opened,
                    widthoutAnimation:this.sidebar.withoutAnimation,
                    mobile:this.device=='mobile'
                }
            }
        },
        methods:{
            handleClickOutside(){
                this.$store.dispatch('closeSideBar',{withoutAnimation:false})
            }
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    @import "src/style/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>