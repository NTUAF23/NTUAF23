import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Change from '@/pages/Change';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/change',
      name: 'Change',
      component: Change,
    },
  ],
});
