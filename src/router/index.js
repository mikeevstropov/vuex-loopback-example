import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('@/pages/home'),
      },
      {
        name: 'customers',
        path: 'customers',
        component: () => import('@/pages/customers'),
      },
      {
        name: 'customer',
        path: 'customer/:id?',
        component: () => import('@/pages/customer'),
      },
      {
        name: 'books',
        path: 'books',
        component: () => import('@/pages/books'),
      },
      {
        name: 'book',
        path: 'book/:id?',
        component: () => import('@/pages/book'),
      },
      {
        name: 'orders',
        path: 'orders',
        component: () => import('@/pages/orders'),
      },
      {
        name: 'order',
        path: 'order/:id?',
        component: () => import('@/pages/order'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
