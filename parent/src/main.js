import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start();

const app = createApp(App)

app.use(router)

app.mount('#app')

window.addEventListener('error', err => {
  console.log('parent error:', err);
},true)

window.onerror = function (err) {
  console.log('parent onerror:',err)
}