import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'lib-flexible'
import ElementPlus from 'element-plus'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// axios.defaults.baseURL = '/api'
// import './config/rem'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/style/fonts/font.css'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import VueCookies from 'vue-cookies'
const app = createApp(App)
app.config.globalProperties.$cookies = VueCookies
// 全局注册Elment-plus Icons 全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})
app.use(store).use(router).use(store).use(ElementPlus, { size: 'small' }).mount('#app')
// app.config.globalProperties.$axios= axios

