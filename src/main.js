import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './style.css'
import './assets/main.css'

const app = createApp(App)


import "./assets/main.css"

app.use(router)

app.mount('#app')
