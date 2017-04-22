import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Change from '@/pages/Change';
import Sponser from '@/pages/Sponser';
import Academic from '@/pages/Academic';
import ArtprojectBien from '@/pages/ArtprojectBien';

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
    {
      path: '/sponser',
      name: 'Sponser',
      component: Sponser,
    },
    {
      path: '/academic',
      name: 'Academic',
      component: Academic,
    },
    {
      path: '/artproject_bien',
      name: 'artproject_bien',
      component: ArtprojectBien,
    },
  ],
});
