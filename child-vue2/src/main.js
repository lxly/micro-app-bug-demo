import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



window.addEventListener('error', err => {
  console.log('child error:', err);
}, true)

window.onerror = err => {
  console.log('child onerror:',err)
}

function test() {
  throw new Error('error!!!')
}
test()