import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persisted from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(persisted))
app.use(router)

app.mount('#app')
