/* global Vue */
import Router from 'vue-router';
import IndexComponent from '@/components/IndexComponent';

Vue.use(Router);

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent,
    },
  ],
});
