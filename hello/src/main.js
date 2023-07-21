import Vue from 'vue'
import App from './App.vue' // App.vue의 내용을 변수 App에 넣어둠

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
