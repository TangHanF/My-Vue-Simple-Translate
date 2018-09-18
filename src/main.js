import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(iView);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
