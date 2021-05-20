import Vue from 'vue'
import axios from 'axios'
import i18n from '@/i18n/i18n'
import VueI18n from 'vue-i18n'
import ViewUI from 'view-design'
import { Table, TableColumn, Button } from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './permission'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueI18n)

Vue.use(Table).use(TableColumn).use(Button)

Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
})