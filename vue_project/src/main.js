import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueOnsen from 'vue-onsenui';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueOnsen);

new Vue({
  render: h => h(App),
}).$mount('#app')
