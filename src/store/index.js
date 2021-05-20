import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: 'store list', // 文本内容
            },
            {
                name: 'comingSoon', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'ios-egg-outline', // icon类型
                text: 'Room & Place', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store