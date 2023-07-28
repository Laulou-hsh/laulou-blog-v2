import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'

import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'

import materialKit from './material-kit'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(materialKit)
app.use(mavonEditor)
app.mount('#app')
