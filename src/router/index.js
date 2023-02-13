import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import ProductList from '../components/ProductList.vue';
import CreateProduct from '../components/CreateProduct.vue';
// import the missing components

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/createproduct', component: CreateProduct },
    { path: '/products', component: ProductList }
    // add the missing routes
  ]
})

export default router