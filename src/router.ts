import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Legend from './views/Legend.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/legend',
      name: 'legend',
      component: Legend,
    },
  ],
});
