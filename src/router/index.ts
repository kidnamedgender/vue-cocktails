import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
import CartView from '../views/CartView.vue';

const routes = [
  {
    path: '/',
    component: MainView,
  },
  {
    path: '/cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
