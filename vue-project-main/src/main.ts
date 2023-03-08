// 基座，负责导航的渲染和登录态的下发，为子应用提供一个挂载div，基座应该保持简介，不涉及业务操作
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')