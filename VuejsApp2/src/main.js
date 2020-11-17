import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store.js";


import App from './App.vue';
import Shelf from './components/Shelf.vue';

Vue.config.productionTip = true;

const routes = [
    { path: '/Shelf', component: Shelf }
    //{ path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
