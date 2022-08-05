import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Vue3ProDist from 'vue3-pro-dist'
import '../node_modules/vue3-pro-dist/dist/style.css'
const app = createApp(App)

app.use(Vue3ProDist)

app.mount('#app')
