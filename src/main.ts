import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import store from './store';
import './registerServiceWorker.ts';
import 'vuetify/dist/vuetify.min.css';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

Vue.use(VueRx, Rx);

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
