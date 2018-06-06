const getters={
    token:state=>state.user.token,
    name:state=>state.user.name,
    roles:state=>state.user.roles,
    avatar:state=>state.user.avatar,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    sidebar:state=>state.app.sidebar,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    device:state=>state.app.device
}

export default getters